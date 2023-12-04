const PENDING = 'pending';
const FULFILLED = 'fulfiled';
const REJECTED = 'rejected';

class MyPromise {
    constructor(executor) {
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            // 如果有错误，就直接执行 reject
            this.reject(error)
        }
    }

    // 储存状态的变量，初始值是 pending
    status = PENDING;
    // 成功之后的值
    value = null;
    // 失败之后的原因
    reason = null;
    // 存储成功回调函数
    onFulfilledCallback = [];
    // 存储失败回调函数
    onRejectedCallback = [];

    // resolve和reject为什么要用箭头函数？
    // 如果直接调用的话，普通函数this指向的是window或者undefined
    // 用箭头函数就可以让this指向当前实例对象
    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value;
            // 判断成功回调是否存在，如果存在就调用
            while (this.onFulfilledCallbacks.length) {
                this.onFulfilledCallbacks.shift()(value)
            }
        }
    }

    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
            while (this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.shift()(reason)
            }
        }
    }

    then = (onFulfilled, onRejected) => {
        // 如果不传，就使用默认函数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

        // 为了链式调用这里直接创建一个 MyPromise，并在后面 return 出去
        const promise2 = new MyPromise((resolve, reject) => {
            // 这里的内容在执行器中，会立即执行
            if (this.status === FULFILLED) {
                // 获取成功回调函数的执行结果
                queueMicrotask(() => {
                    try {
                        // 获取成功回调函数的执行结果
                        const x = onFulfilled(this.value);
                        // 传入 resolvePromise 集中处理
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                })
            } else if (this.status === REJECTED) {
                queueMicrotask(() => {
                    try {
                        // 调用失败回调，并且把原因返回
                        const x = onRejected(this.reason);
                        // 传入 resolvePromise 集中处理
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                })
            } else if (this.status === PENDING) {
                // 等待
                // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
                // 等到执行成功失败函数的时候再传递
                this.onFulfilledCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            // 获取成功回调函数的执行结果
                            const x = onFulfilled(this.value);
                            // 传入 resolvePromise 集中处理
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    })
                });
                this.onRejectedCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            // 调用失败回调，并且把原因返回
                            const x = onRejected(this.reason);
                            // 传入 resolvePromise 集中处理
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    })
                });
            }
        })

        return promise2;
    }

    resolvePromise = (x, resolve, reject) => {
        // 判断x是不是 MyPromise 实例对象
        if (promise2 === x) {
            return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
        }
        if (x instanceof MyPromise) {
            // 执行 x，调用 then 方法，目的是将其状态变为 fulfilled 或者 rejected
            // x.then(value => resolve(value), reason => reject(reason))
            // 简化之后
            x.then(resolve, reject)
        } else {
            // 普通值
            resolve(x)
        }
    }

    // resolve 静态方法
    static resolve(parameter) {
        // 如果传入 MyPromise 就直接返回
        if (parameter instanceof MyPromise) {
            return parameter;
        }

        // 转成常规方式
        return new MyPromise(resolve => {
            resolve(parameter);
        });
    }

    // reject 静态方法
    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason);
        });
    }
}

module.exports = MyPromise;
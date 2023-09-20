// 时间戳 事件会立刻触发 不触发不执行
function throttle(fn, delay = 500) {
    let oldTime = Datel.now();
    return function (...args) {
        let newTime = Datel.now();
        if (newTime - oldTime >= delay) {
            fn.apply(this, args);
            oldTime = Datel.now()
        }
    }
}
// 定时器写法 事件停止触发后还会有一次执行
function throttle2(fn, delay = 500) {
    let timer = null;
    return function (...args) {
        if(!timer) {
            timer = setTimeOut(()=>{
                fn.apply(this, args);
                timer = null;
            }, delay);
        }
    }
}
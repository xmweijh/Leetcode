// 入栈正常入  出栈 需要将当前队列中除队尾元素全部出队到另一个队  然后再输出队尾元素作为栈的输出

// 此时再入栈就需要 入到另一个队
var MyStack = function () {
    this.first_queue = [];
    this.second_queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    if (this.first_queue.length)
        this.first_queue.push(x);
    else
        this.second_queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.first_queue.length) {
        while (this.first_queue.length > 1) {
            this.second_queue.push(this.first_queue.shift());
        }
        return this.first_queue.shift()
    }
    while (this.second_queue.length > 1) {
        this.first_queue.push(this.second_queue.shift())
    }
    return this.second_queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    const x = this.pop();
    this.push(x);
    return x;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.first_queue.length && !this.second_queue.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var obj = new MyStack()
obj.push(3)
obj.push(2)
obj.push(1)
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()
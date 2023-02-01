var MyQueue = function () {
    this.inStack = [];  // 控制进入元素
    this.outStack = [];     // 控制输出元素
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // 如果出栈有 则直接输出栈顶
    if (this.outStack.length) {
        return this.outStack.pop();
    }
    // 否则将入栈中的元素输入到出栈
    // 入栈中先进入的在底部  pop输入到出栈后 先进入的反而在顶部  符合要求
    while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
    }
    return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // 直接调用pop  再push到出栈  减少代码书写
    const x = this.pop()
    this.outStack.push(x);
    return x
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.inStack.length && !this.outStack.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
var obj = new MyQueue()
obj.push(2)
obj.push(3)
var param_2 = obj.pop()
var param_3 = obj.peek()
var param_4 = obj.empty()
console.log(obj)
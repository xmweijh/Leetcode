Function.prototype.myApply = function(context) {
    if (typeof context !== 'function') {
        throw new TypeError('');
    }

    let result = null;
    context = context || window;

    const fnSymbol = new Symbol();
    context[fnSymbol] = this;

    if (arguments[1]) {
        result = context[fnSymbol](...arguments[1]);
    } else {
        result = context[fnSymbol]();
    }

    delete context[fnSymbol];
    return result;
}
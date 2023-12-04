Function.prototype.myBind = function(context) {
    if (typeof context !== 'function') {
        throw new TypeError('');
    }

    let result = null;
    context = context || window;
    const fn = this;
    const args = [...arguments].slice(1);
    return function Fn() {
        return fn.apply(this instanceof fn ? this : context, args.concat(arguments));
    }
}
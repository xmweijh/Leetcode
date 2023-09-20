function myNew(func, ...args) {
    const obj = Object.create(func.prototype);
    let result = func.apply(obj, args);
    return result instanceof Object ? result : obj;
}
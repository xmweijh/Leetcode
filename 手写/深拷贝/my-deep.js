function shallowClone(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    if (obj instanceof Array) {
        return [].concat(obj);
    }
    if (obj instanceof Object) {
        return Object.assign({}, obl);
    }
}

function deepClone(obj, map = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    
    if (map.has(obj)) {
        return map.get(obj);
    }
    let result = Array.isArray(obj) ? [] : {};
    map.set(obj, result);
    
    for (const key in obj) {
        if (object.hasOwnProperty.call(obj, key)) {
            result[key] = deepClone(obj[key]);
        }
    }

    return result;
}
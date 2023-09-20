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

function deepClone(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    
    let result = obj instanceof Array ? [] : {};

    for (const key in obj) {
        if (object.hasOwnProperty.call(obj, key)) {
            result[key] = deepClone(obj[key]);
        }
    }

    return result;
}
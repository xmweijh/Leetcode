function debounce(fn, delay = 500) {
    let timer = null;

    return function (...args) {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay);
    }
}

// 取消功能
function debounce(fn, delay = 500) {
    let timer = null;

    const _debounce = function (...args) {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay);
    }

    _debounce.cancel = function () {
        timer && clearTimeout(timer);
    }

    return _debounce;
}


// 立即执行版本
function debounce2(fn, delay = 500, immediate = false) {
    let timer = null;

    return function (...args) {
        let context = this;
        if (timer) {
            clearTimeout(timer);
        }
        if (immediate) {
            // 第一次还没有定时器 立即执行
            let callNow = !timer;
            timer = setTimeout(function () {
                timer = null;
            }, delay);
            if (callNow) {
                func.apply(context, args);
            }
        } else {
            timer = setTimeout(function () {
                func.apply(context, args);
            }, wait)
        }
    }
}
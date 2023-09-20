function myPromise(array) {
    return new Promise((resolve, reject) => {
        if (array && typeof array[Symbol.iterator] === 'function') {
            let arrayLength = array.length;
            let count = 0;
            let resultArray = [];
            array.forEach((value, i) => {
                Promise.resolve(value).then((res)=>{
                    resultArray[i] = res;
                    count++;
                    if(count === arrayLength) {
                        resolve(resultArray);
                    }
                },
                (err) => {
                    reject(err);
                }
                )
            })
        }
    })
}
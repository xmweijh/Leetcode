/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let queue = []
    people.sort((a, b ) => {
        // 先按照身高怕 降序
        if(b[0] !== a[0]) {
            return b[0] - a[0]
        } else {
            // 升高相同 按照k值 k大的在后面
            return a[1] - b[1]
        }
        
    })

    // 这时候按k值插入就能满足条件
    // 因为前面都是比item高的，k为几就插到序号几，即可满足条件
    // 而后续的插入不会影响前面的状态，因为后续插入都比前面的小
    // 不管插入多少，仍然满足大于他的只有k个的条件
    for(let i = 0; i < people.length; i++) {
        queue.splice(people[i][1], 0, people[i])
    }
    return queue
};
console.log([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]])
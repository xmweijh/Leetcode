/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let res = []
    let size = 26
    let firstHash = new Array(size).fill(0)   // 初始化 hash 数组

    let a = "a".charCodeAt()
    let firstWord = words[0]
    for (let i = 0; i < firstWord.length; i++) { // 第 0 个单词的统计
        let idx = firstWord[i].charCodeAt()
        firstHash[idx - a] += 1
    }

    let otherHash = new Array(size).fill(0)    // 初始化 hash 数组
    for (let i = 1; i < words.length; i++) { // 1-n 个单词统计
        for (let j = 0; j < words[i].length; j++) {
            let idx = words[i][j].charCodeAt()
            otherHash[idx - a] += 1
        }

        for (let i = 0; i < size; i++) {
            firstHash[i] = Math.min(firstHash[i], otherHash[i])
        }
        otherHash.fill(0)
    }

    for (let i = 0; i < size; i++) {
        while (firstHash[i] > 0) {
            res.push(String.fromCharCode(i + a))
            firstHash[i]--
        }
    }
    return res
};

console.log(commonChars(["bella", "label", "roller"]))
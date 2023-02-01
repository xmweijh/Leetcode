/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

var findItinerary = function(tickets) {
    let result = ['JFK']
    let map = {}

    // 利用map记录出发站点对应的到达站点
    for (const tickt of tickets) {
        const [from, to] = tickt
        // 当第一次遇到form  建立一个key映射
        if (!map[from]) {
            map[from] = []
        }
        map[from].push(to)
    }
    // 将所有站的终点站按英文顺序排列  方便后续使用
    for (const city in map) {
        // 对到达城市列表排序
        map[city].sort()
    }
    function backtracing() {
        if (result.length === tickets.length + 1) {
            return true
        }
        // 当前结果最后一位没有终点站  则失败  回溯
        if (!map[result[result.length - 1]] || !map[result[result.length - 1]].length) {
            return false
        }
        // 遍历当前结果最后一位所有可能的终点站map[result[result.length - 1]]
        for(let i = 0 ; i <  map[result[result.length - 1]].length; i++) {
            let city = map[result[result.length - 1]][i]
            // 删除已走过航线，防止死循环
            map[result[result.length - 1]].splice(i, 1)
            result.push(city)
            if (backtracing()) {
                // 成功则结束迭代 因为map的valu是排过序的  第一次找到的就是最好的路径
                return true
            }
            // 失败则回溯  要将前个result走过的city加回来
            result.pop()
            map[result[result.length - 1]].splice(i, 0, city)
        }
    }
    backtracing()
    return result
};


console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]))
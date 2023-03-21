/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    return [celsius+273.15, celsius*1.8+32]
};

console.log('convertTemperature', convertTemperature(36.50));
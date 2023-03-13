/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    let trainEnergy = energy.reduce((a,b) => a+b) - initialEnergy + 1;
    trainEnergy = trainEnergy > 0 ? trainEnergy : 0 
    let trainExperience = 0
    for(let i = 0; i < experience.length; i++) {
        if(initialExperience <= experience[i]) {
            trainExperience += experience[i] - initialExperience + 1
            initialExperience += experience[i] - initialExperience + 1
        }
        initialExperience += experience[i]
    }
    return trainExperience+ trainEnergy
};

let initialEnergy = 5, initialExperience = 3, energy = [1,4,3,2], experience = [2,6,3,1]
console.log('minNumberOfHours', minNumberOfHours(initialEnergy, initialExperience, energy, experience));
//var number = [2,2,1,3,5,5];

function numbers(input) {
    const frequencyMap = {};

    input.forEach(num) => {
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }
    });

    return Object.keys(frequencyMap).map((key) => `${key}:${frequencyMap[key]}`);
}
const input = [2, 2, 1, 3, 5, 5];
const output = numbers(input);
console.log(output);
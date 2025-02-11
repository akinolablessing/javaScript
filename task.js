function numbers(userInput) {
    let emptylist = {};

    userInput.forEach((number)=>{
        if (emptylist[number]) {
            emptylist[number]++;
        } else {
            emptylist[number] = 1;
        }
    });

    return Object.keys(emptylist).map((key) => `${key}:${emptylist[key]}`);
}
let userInput = [2, 2, 1, 3, 5, 5];
let output = numbers(userInput);
console.log(output);
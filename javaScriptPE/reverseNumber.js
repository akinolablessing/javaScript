function reverseNumber(n){
    n += "";
    return n.split("").reverse().join("");

}
console.log(Number(reverseNumber(654321)))
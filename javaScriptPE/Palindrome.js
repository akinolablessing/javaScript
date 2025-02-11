function numberPalindrome(string){
    const len = string.length;
    for(let i = 0; i < len/2; i++){
      if(string[i] !== string[len - 1- i]){
        return false;
      }
    }
    return true;
}
const str1 = "madam";
const str2 = "nursesrun";
const str3 = "yam";

console.log(numberPalindrome(str1));
console.log(numberPalindrome(str2));
console.log(numberPalindrome(str3));
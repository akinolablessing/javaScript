function incrementLastElement(arr) {
    let result = arr.slice(0, -1).concat([arr[arr.length - 1] + 1]);
    return result;
  }
  function secondIncrementLastElement(num){
        const result = [];
        let number = 1;
        
        for (let i = num.length - 1; i >= 0; i--) {
          const sum = num[i] + number;
          result.unshift(sum % 10);
        number = Math.floor(sum / 10);
    }
  
   if (number > 0) {
    result.unshift(number);
    }
  
    return result;

         
  }
  module.exports = {incrementLastElement , secondIncrementLastElement};
  
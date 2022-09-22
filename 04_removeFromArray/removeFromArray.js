const removeFromArray = function(arr, num) {
   let arrBeg = arr.slice(0, num-1);
   let arrEnd = arr.slice(num);
   let result = arrBeg.concat(arrEnd);
   return result 
};

// Do not edit below this line
module.exports = removeFromArray;

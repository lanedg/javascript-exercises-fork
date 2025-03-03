const reverseString = function (string) {
  let temp = "";
  let stringArr = string.split("");
  for (let i = 0; i < string.length / 2; i++) {
    temp = stringArr[stringArr.length - (i + 1)];
    stringArr[stringArr.length - (i + 1)] = stringArr[i];
    stringArr[i] = temp;
  }
  return stringArr.join("");
};
console.log(reverseString("Stake"));

// Do not edit below this line
module.exports = reverseString;

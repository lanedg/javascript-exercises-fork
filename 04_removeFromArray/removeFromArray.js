const removeFromArray = function (array) {
  let newArray = [];
  for (const element of array) {
    for (let i = 1; i < arguments.length; i++) {
      if (element === arguments[i]) {
        break;
      }
      if (i === arguments.length - 1) {
        newArray.push(element);
      }
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

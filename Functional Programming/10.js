Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((item, index, array) => {
    if (callback(item, index, array)) {
      newArray.push(item);
    }
  });
  // Only change code above this line
  return newArray;
};

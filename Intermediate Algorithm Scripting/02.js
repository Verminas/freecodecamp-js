function diffArray(arr1, arr2) {
  let result = [];
  arr1.forEach(item => {
    if (!arr2.find(el => el === item)) {
      result.push(item);
    }
  });
  arr2.forEach(item => {
    if (!arr1.find(el => el === item)) {
      result.push(item);
    }
  });
  return result;
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

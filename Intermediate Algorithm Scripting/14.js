function steamrollArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  } else {
    let result = [];
    for (let i = 0; i < arr.length; i += 1) {
      result.push(...steamrollArray(arr[i]));
    }
    return result;
  }
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

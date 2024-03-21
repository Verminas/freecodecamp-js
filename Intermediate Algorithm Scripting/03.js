function destroyer(arr) {
  let copyArray = [...arr];
  let arg = [...arguments];
  arg.forEach(item => {
    if (!Array.isArray(item)) {
      while(copyArray.indexOf(item) !== -1) {
        copyArray.splice(copyArray.indexOf(item), 1);
      }
    }
  });
  return copyArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

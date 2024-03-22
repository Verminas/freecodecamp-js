function addTogether(x, y) {
  if (typeof x !== 'number') {
    return undefined;
  }
  if ([...arguments].length === 2 && typeof y === 'undefined') {
    return undefined;
  }

  if (y !== undefined) {
    if (typeof y !== 'number') {
      return undefined;
    }
    return x + y;
  } else {
    return function(y) {
      if (typeof y !== 'number') {
        return undefined;
      }
      return x + y;
    }
  }
}
addTogether(2,3);

function whatIsInAName(collection, source) {
  let result = [];
  let arraySource = Object.entries(source);
  collection.forEach(item => {
      if (arraySource.every(([key, value]) => {
        return item[key] === value;
      })) {
        result.push(item);
      }
  });
  return result;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let result = [];
  arr.forEach(item => {
    let obj = {};
    obj['name'] = item['name'];
    obj['orbitalPeriod'] = Math.round(2 * Math.PI * Math.sqrt((item['avgAlt'] + earthRadius) ** 3 / GM));
    result.push(obj);
  });
  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

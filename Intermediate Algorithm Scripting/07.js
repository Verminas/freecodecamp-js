function pairElement(str) {
  const arrStr = str.split('');
  const array = [];
  arrStr.forEach(item => {
    let base = [item];
    switch(item) {
      case 'A':
        base.push('T');
        break;
      case 'T':
        base.push('A');
        break;
      case 'C':
        base.push('G');
        break;
      case 'G':
        base.push('C');
        break;
    }
    array.push(base);
  });
  return array;
}

pairElement("GCG");

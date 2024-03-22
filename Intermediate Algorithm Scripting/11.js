function sumFibs(num) {
  let sequence = [0, 1];
  let i = 1;
  while (sequence[i] + sequence[i - 1] <= num) {
    let current = sequence[i] + sequence[i - 1];
    sequence.push(current);
    i += 1;
  }
  let odd = sequence.filter(item => item % 2 !== 0);
  return odd.reduce((a, b) => a + b, 0);
}

sumFibs(4);

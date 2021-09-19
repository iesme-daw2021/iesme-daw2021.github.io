function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

console.info('pow(2, 6) = ' + pow(2, 6));
console.info('pow(0, 5) = ' + pow(0, 5));
console.info('pow(-5, 3) = ' + pow(-5, 3));

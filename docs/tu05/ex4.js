function ask(number, yes, no) {
  // Convert isPositiveNumber to arrow function
  if (((num) => num >= 0)(number)) yes();
  else no();
}

ask(
  23,
  // Convert to arrow function
  () => {
    console.info('Is positive');
  },
  // Convert to arrow function
  () => {
    console.error('Is negative');
  }
);

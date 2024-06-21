function createCounter(n) {
  const a = (n) => (n += 1);
  return a;
}

console.log(createCounter(1));

module.exports = createCounter;

function createCounter(n) {
  return function () {
    return n++;
  };
}

console.log(createCounter(1));

module.exports = createCounter;

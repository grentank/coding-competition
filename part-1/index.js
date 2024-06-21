function createCounter(n) {
  let currentCount = n;

  return function () {
    return currentCount++;
  };
}

module.exports = createCounter;

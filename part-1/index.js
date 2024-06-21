function createCounter(n) {
  let count = n;
  function counter() {
    return count++;
  }

  return counter;
}

module.exports = createCounter;

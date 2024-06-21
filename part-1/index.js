function createCounter(n) {
  let count = n;

  function counter() {
    count++;
    console.log(count);
  }

  return counter;
}

module.exports = createCounter;

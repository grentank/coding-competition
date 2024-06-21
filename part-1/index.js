function createCounter(n) {
  function (n) {
    return n++
  }
}

const counter = createCounter(5);

console.log(counter());

module.exports = createCounter;

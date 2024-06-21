function createCounter(n) {
  const obj = { val: n };
  return function () {
    return obj.val++;
  };
}

module.exports = createCounter;

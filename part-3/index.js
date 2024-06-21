function addPromises(a, b, c) {
  return (
    Promise.resolve.then(arguments[0] => arguments[0]) +
    Promise.resolve.then(arguments[1] => arguments[1]) +
    Promise.resolve.then(arguments[2] => arguments[2])
  );
}

module.exports = addPromises;

const wait = (ms, val) =>
new Promise((resolve) => setTimeout(() => resolve(val), ms))

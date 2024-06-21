async function addPromises(args) {
  return new Promise.all([..args])
.then(values => values.reduce((acc, cur) => acc + cur))
}

console.log(addPromises(4, 6, 6));
module.exports = addPromises;

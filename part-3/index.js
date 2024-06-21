async function addPromises(x, y, z) {
  return new Promise((resolve) => {
    const result = x + y + z;
    resolve(result);
  }).then((res) => console.log(res));
}

console.log(addPromises(4, 6, 6));
module.exports = addPromises;

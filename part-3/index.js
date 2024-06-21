async function addPromises(arr) {
  return new Promise.all((resolve) => {
    const result = arr.reduce((acc, cur) => acc + cur);
    resolve(result);
  }).then((res) => console.log(res));
}

console.log(addPromises(4, 6, 6));
module.exports = addPromises;

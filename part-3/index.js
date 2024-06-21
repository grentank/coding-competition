async function addPromises(...promises) {
  const numArr = await Promise.all(promises);
  return numArr.reduce((arr, curr) => arr + curr, 0);
}

module.exports = addPromises;

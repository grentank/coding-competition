async function addPromises(...arg) {
  return (await Promise.all(arg)).reduce((el, acc) => acc + el, 0);
}

module.exports = addPromises;

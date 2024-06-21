async function addPromises(...args) {
  const data = await Promise.all(args);
  return data.filter((el) => el !== undefined).reduce((acc, el) => acc + el);

}

module.exports = addPromises;

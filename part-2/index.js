function once(fn) {
  //
  let isCalled = false;
  return function (args) {
    if (!isCalled) {
      isCalled = true;
      return fn(args);
    }
    return undefined;
  };
}

module.exports = once;

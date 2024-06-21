function checkParity(strNum) {
    let a = 0;
    Number(strNum) % 2 == 0 ? a += 1 : a += 0
    return a
}

module.exports = checkParity;
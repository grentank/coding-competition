function createCounter(n) {
    return function counter() {
        return n++
    }
}






module.exports = createCounter;
// npm run test part-1
// npm run new-task
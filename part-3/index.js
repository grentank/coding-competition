async function addPromises(p1,p2,p3) {
let a = await Promise.all(p1,p2,p3)
return a
}

module.exports = addPromises;
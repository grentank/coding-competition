function joinArrays(arr1, arr2, key) {
const res =  arr1.filter((o1) => !arr2.some((o2) => o1[key] === o2[key]));
return res
}

module.exports = joinArrays;

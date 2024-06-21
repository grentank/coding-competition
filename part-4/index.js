
	const joinArrays = (arr1, arr2) => [...arr1, ...arr2].filter(i => typeof i === 'number');

module.exports = joinArrays;
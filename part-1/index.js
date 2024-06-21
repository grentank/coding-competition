function createCounter (){
	let counter = 0;
	return {
	increment: function() {
		counter += 1
	},
	currentValue: function() {
		return counter
	}
	};
}

module.exports = createCounter;

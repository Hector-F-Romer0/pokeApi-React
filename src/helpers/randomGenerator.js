function generateUniqueRandom(maxNr) {
	let haveIt = [];
	//Generate random number
	let random = (Math.random() * maxNr).toFixed();

	//Coerce to number by boxing
	random = Number(random);

	if (!haveIt.includes(random)) {
		haveIt.push(random);
		return random;
	} else {
		if (haveIt.length < maxNr) {
			//Recursively generate number
			return generateUniqueRandom(maxNr);
		} else {
			console.log("No more numbers available.");
			return false;
		}
	}
}

const randomGenerator = (max, count) => {
	const arrayFinal = new Array(count);

	for (let i = 0; i < count; i++) {
		arrayFinal[i] = generateUniqueRandom(max) + 1;
	}
	return arrayFinal;
};
export { randomGenerator };

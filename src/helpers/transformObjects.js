function capitalizeFirstLetter(string) {
	return string[0].toUpperCase() + string.slice(1);
}

// La altura de los pokemons en la API están dadas en decímetros. Con este método, las pasamos a metros.
function convertHeight(height) {
	const newHeight = height / 10;
	return newHeight;
}

// *El peso de los pokemons en la API están dadas en hectogramos. Con este método, las pasamos a kg.
function convertWeight(weight) {
	const newWeight = weight / 10;
	return newWeight;
}

function returnNumberGeneration(generation) {
	let array = generation.split("-");
	return array[1].toUpperCase();
}

export { capitalizeFirstLetter, convertHeight, convertWeight, returnNumberGeneration };

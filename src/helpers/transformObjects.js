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
	let region = "???";
	switch (array[1]) {
		case "i":
			region = "Kanto";
			break;
		case "ii":
			region = "Jotho";
			break;
		case "iii":
			region = "Hoenn";
			break;
		case "iv":
			region = "Sinnoh";
			break;
		case "v":
			region = "Teselia";
			break;
		case "vi":
			region = "Kalos";
			break;
		case "vii":
			region = "Alola";
			break;
		case "viii":
			region = "Galar";
			break;
		case "ix":
			region = "Hisui";
			break;
		default:
			break;
	}

	return `${array[1].toUpperCase()} (${region})`;
}

export { capitalizeFirstLetter, convertHeight, convertWeight, returnNumberGeneration };

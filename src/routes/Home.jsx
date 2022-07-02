import CardsPokemon from "../components/CardsPokemon";
import SearchBar from "../components/SearchBar";

const Home = function () {
	return (
		<>
			<h1>Home</h1>
			<h2 className="center-title">Ey</h2>
			<p className="">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, veniam delectus facere mollitia,
				repellendus totam perspiciatis molestias, magnam voluptatibus ipsam neque. Officia possimus, expedita
				inventore cum distinctio facere unde. Autem?
			</p>
			<SearchBar />
			<CardsPokemon />
		</>
	);
};

export default Home;

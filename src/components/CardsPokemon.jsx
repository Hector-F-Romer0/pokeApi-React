import React, { useContext } from "react";
import SingleCard from "./SingleCard";
import { randomGenerator } from "../helpers/randomGenerator";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const CardsPokemon = ({ userSearch = "" }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	const { favorites, setFavorites } = useContext(FavoritesContext);

	useEffect(() => {
		console.log("SingleCard render");
		if (localStorage.getItem("favorites")) {
			// CARGAR DATOS DEL LOCAL STORAGE
			setFavorites(JSON.parse(localStorage.getItem("favorites")));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	useEffect(() => {
		setLoading(true);
		const arrayPokemon = randomGenerator(904, 8);
		arrayPokemon.forEach((element) => {
			const url = `https://pokeapi.co/api/v2/pokemon/${element}/`;

			const fetchData = async (url) => {
				const res = await fetch(url);
				const newData = await res.json();
				setData((old) => [...old, newData]);
			};
			fetchData(url);
		});
		setLoading(false);
	}, []);

	if (loading) {
		return <Loading />;
	}

	if (userSearch !== "") {
		return (
			<>
				<div className="mycard-container">
					<div className="myrow-card">
						<SingleCard key={userSearch.id} data={userSearch} />
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="mycard-container">
				<div className="myrow-card">
					{data.map((item) => (
						<SingleCard key={item.id} data={item} />
					))}
				</div>
			</div>
		</>
	);
};

export default CardsPokemon;

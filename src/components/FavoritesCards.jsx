import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import SingleCard from "./SingleCard";

const FavoritesCards = () => {
	const { favorites, setFavorites } = useContext(FavoritesContext);

	useEffect(() => {
		console.log("SingleCard render");
		console.log(favorites.lenght);
		if (localStorage.getItem("favorites")) {
			// CARGAR DATOS DEL LOCAL STORAGE
			setFavorites(JSON.parse(localStorage.getItem("favorites")));
		}

		if (favorites.lenght === 0) console.log("Vacio");
	}, []);

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	if (favorites.lenght === 0) {
		return <h1>No tienes pokemons favoritos todavía</h1>;
	}

	return (
		<>
			<div className="mycard-container">
				<div className="myrow-card">
					{favorites.map((item) => (
						<SingleCard key={item.id} data={item} />
					))}
				</div>
			</div>
		</>
	);
};

export default FavoritesCards;

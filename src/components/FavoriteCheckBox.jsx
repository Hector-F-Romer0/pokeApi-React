import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const FavoriteCheckBox = ({ stateCheckBox, setStateCheckBox, data }) => {
	const { favorites, setFavorites } = useContext(FavoritesContext);

	useEffect(() => {
		if (stateCheckBox) {
			setFavorites([...favorites, data]);
		} else {
			const favoritesUpdated = favorites.filter((item) => item.id !== data.id);
			setFavorites(favoritesUpdated);
		}
	}, [stateCheckBox]);

	const handleCheckBox = (e) => {
		setStateCheckBox(!stateCheckBox);
	};

	return (
		<>
			<input
				type="checkbox"
				className="star-checkbox"
				name=""
				id=""
				checked={stateCheckBox}
				onChange={handleCheckBox}
			/>
		</>
	);
};

export default FavoriteCheckBox;

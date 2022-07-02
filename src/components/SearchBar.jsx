import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import useForm from "../hooks/useForm";

const SearchBar = ({ setData }) => {
	const [inputs, handleChange, reset] = useForm({ pokemonName: "" });
	/* "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154" */

	const { pokemonName } = inputs;
	const handleSubmit = (e) => {
		e.preventDefault();
		/* 		console.log(pokemonName);
		console.log(data); */
	};

	return (
		<div className="container" onSubmit={handleSubmit}>
			<form className="m-4" action="">
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Ingrese el nombre del pokemon"
						name="pokemonName"
						onChange={handleChange}
						value={pokemonName}
					/>
					<button className="btn btn-primary" type="submit">
						Buscar
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;

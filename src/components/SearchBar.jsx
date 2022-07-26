import React, { useState } from "react";
import Swal from "sweetalert2";
import useForm from "../hooks/useForm";

const SearchBar = ({ setUserSearch }) => {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const [inputs, handleChange, reset] = useForm({ pokemonName: "" });
	const { pokemonName } = inputs;

	const fetchPokemon = async (url) => {
		setLoading(true);
		try {
			const res = await fetch(url);
			console.log(res);
			if (!res.ok) {
				reset();
				return Swal.fire({
					title: "¡Error!",
					text: "El nombre del pokemon ingresado no existe o no ha sido descubierto aún. Prueba de nuevo",
					icon: "question",
					confirmButtonText: "De acuerdo",
				});
			}
			const data = await res.json();
			setUserSearch(data);
		} catch (e) {
			setError(`Error al realizar el Fetch: ${e}`);
		} finally {
			setLoading(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (pokemonName === "") {
			reset();
			return Swal.fire({
				title: "¡Error!",
				text: "El campo no puede estar vacío. Prueba de nuevo",
				icon: "error",
				confirmButtonText: "De acuerdo",
			});
		}

		fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase().trim()}/`);
	};

	const handleSubmitNewCards = () => {
		reset();
		setUserSearch("");
	};

	return (
		<>
			<div className="container">
				<form className="" onSubmit={handleSubmit}>
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
			<div className="container">
				<form action="" className="" onSubmit={handleSubmitNewCards}>
					<button className="button" type="submit">
						Generar nuevos pokemons
					</button>
				</form>
			</div>
		</>
	);
};

export default SearchBar;

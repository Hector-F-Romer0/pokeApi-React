import { useEffect, useState } from "react";
import {
	capitalizeFirstLetter,
	convertHeight,
	convertWeight,
	returnNumberGeneration,
} from "../helpers/transformObjects";
import { useFetch } from "../hooks/useFetch";
import ColorType from "./ColorType";

const SingleCard = ({ data }) => {
	const { abilities, id, name, sprites, types, weight, height } = data;
	useEffect(() => {
		console.log("SingleCard render");
	}, []);
	// Obtengo la información del primer Fetch (Trae info general del pokemon)

	// Obtengo la información del segundo Fetch (Info más detallada del pokemon). Se usa la forma data:dataSpecie para renombrar el destructuring del objeto
	const {
		data: dataSpecie,
		error: errorSpecie,
		loading: loadingSpecie,
	} = useFetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

	const { generation, egg_groups } = dataSpecie;
	return (
		<div className="mycard">
			<div className="mycard-img">
				<img src={sprites.other["official-artwork"].front_default} alt="" className="card-img" />
			</div>
			<h1>{capitalizeFirstLetter(name)}</h1>
			<div className="mycard-body">
				<div className="pokemon-types">
					{types.map((item) => (
						<ColorType key={item.slot} type={item.type.name}></ColorType>
					))}

					{/* <ColorType types={types} /> */}
					{/* {types.map((item, index) => (
				<h2 key={index}>{capitalizeFirstLetter(item.type.name)}</h2>
			))} */}
				</div>
				<h3>
					Peso: <span>{`${convertWeight(weight)} kg`}</span>
				</h3>
				<h3>
					Altura: <span>{`${convertHeight(height)} m`}</span>
				</h3>
				<h3>
					Generación: <span>{generation !== undefined ? returnNumberGeneration(generation.name) : null}</span>
				</h3>
				<h3>Grupo huevo</h3>
				<ul>
					{egg_groups !== undefined
						? egg_groups.map((item, index) =>
								egg_groups !== undefined ? (
									<li key={index}>{` ${capitalizeFirstLetter(item.name)}`}</li>
								) : null
						  )
						: null}
				</ul>

				<h3>Habilidades</h3>
				<ul>
					{abilities.map((item, index) =>
						item.is_hidden === true ? (
							<li key={index}>{`${capitalizeFirstLetter(item.ability.name)} (Oculta)`}</li>
						) : (
							<li key={index}>{capitalizeFirstLetter(item.ability.name)}</li>
						)
					)}
				</ul>
			</div>
			<div className="mycard-footer">
				<h4>{id < 10 ? `#00${id}` : id < 100 ? `#0${id}` : `#${id}`}</h4>
			</div>
		</div>
	);
};

export default SingleCard;

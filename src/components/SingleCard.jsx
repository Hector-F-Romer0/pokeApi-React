import { useContext, useEffect, useState } from "react";

import {
	capitalizeFirstLetter,
	convertHeight,
	convertWeight,
	returnNumberGeneration,
} from "../helpers/transformObjects";
import { useFetch } from "../hooks/useFetch";
import ColorType from "./ColorType";
import FavoriteCheckBox from "./FavoriteCheckBox";

const SingleCard = ({ data }) => {
	const [stateCheckBox, setStateCheckBox] = useState(false);

	const { abilities, id, name, sprites, types, weight, height } = data;

	// Obtengo la información del segundo Fetch (Info más detallada del pokemon). Se usa la forma data:dataSpecie para renombrar el destructuring del objeto
	const { data: dataSpecie } = useFetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

	const { generation, egg_groups } = dataSpecie;

	useEffect(() => {}, []);

	return (
		<div className="mycard">
			<div className="mycard-img">
				<img
					src={sprites.other["official-artwork"].front_default}
					alt={`Arte oficial de ${name}`}
					className="card-img"
				/>
			</div>
			<h1>{capitalizeFirstLetter(name)}</h1>
			<FavoriteCheckBox stateCheckBox={stateCheckBox} setStateCheckBox={setStateCheckBox} data={data} />
			<div className="mycard-body">
				<div className="pokemon-types">
					{types.map((item) => (
						<ColorType key={item.slot} type={item.type.name}></ColorType>
					))}
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

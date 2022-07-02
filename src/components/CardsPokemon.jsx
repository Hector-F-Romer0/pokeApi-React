import React from "react";
import SingleCard from "./SingleCard";
import { randomGenerator } from "../helpers/randomGenerator";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch.js";
import { useEffect, useState } from "react";

const CardsPokemon = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const arrayPokemon = randomGenerator(904, 3);
		console.log(arrayPokemon);
		arrayPokemon.forEach((element) => {
			const url = `https://pokeapi.co/api/v2/pokemon/${element}/`;

			const fetchData = async (url) => {
				const res = await fetch(url);
				const newData = await res.json();
				setData((old) => [...old, newData]);
			};
			fetchData(url);
		});
	}, []);

	useEffect(() => {
		if (data.length === 3) {
			setLoading(false);
		}
	}, [data]);

	if (data.length < 3) {
		return <Loading />;
	}

	if (data.length === 3 && loading === false) {
		console.log(data);
		console.log(data[0].name);
		return (
			<>
				<h2>Aquí se desplegarán las cards</h2>
				<div className="mycard-container">
					<div className="myrow-card">
						{data[0].name === undefined
							? null
							: data.map((item) => <SingleCard key={item.id} data={item} />)}

						{/* {data2.lenght === 0 ? null : <SingleCard data={data2} />}
						{data3.lenght === 0 ? null : <SingleCard data={data3} />} */}
						{/* {arrayPokemon.map((item) => (
							console.log(item))
							
						)} */}
						{/* {data === null ? null : data.map((item, index) => <SingleCard key={index} dataPokemon={item} />)} */}
					</div>
				</div>
			</>
		);
	}
};

export default CardsPokemon;

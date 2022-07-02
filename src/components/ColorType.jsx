import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../helpers/transformObjects";
import styles from "../css/types.module.css";

const ColorType = ({ type }) => {
	const [typeColor, setTypeColor] = useState();

	useEffect(() => {
		switch (type) {
			case "normal":
				setTypeColor(styles.normalType);
				break;
			case "fighting":
				setTypeColor(styles.fightingType);
				break;
			case "flying":
				setTypeColor(styles.flyingType);
				break;
			case "poison":
				setTypeColor(styles.poisonType);
				break;
			case "ground":
				setTypeColor(styles.groundType);
				break;
			case "rock":
				setTypeColor(styles.rockType);
				break;
			case "bug":
				setTypeColor(styles.bugType);
				break;
			case "ghost":
				setTypeColor(styles.ghostType);
				break;
			case "steel":
				setTypeColor(styles.steelType);
				break;
			case "fire":
				setTypeColor(styles.fireType);
				break;
			case "water":
				setTypeColor(styles.waterType);
				break;
			case "grass":
				setTypeColor(styles.grassType);
				break;
			case "electric":
				setTypeColor(styles.electricType);
				break;
			case "psychic":
				setTypeColor(styles.psychicType);
				break;
			case "ice":
				setTypeColor(styles.iceType);
				break;
			case "dragon":
				setTypeColor(styles.dragonType);
				break;
			case "dark":
				setTypeColor(styles.darkType);
				break;
			case "fairy":
				setTypeColor(styles.fairyType);
				break;
			case "shadow":
				setTypeColor(styles.shadowType);
				break;
			default:
				setTypeColor(styles.unknownType);
				break;
		}
	}, [type]);

	return (
		<>
			<h2 className={typeColor}>{capitalizeFirstLetter(type)}</h2>
		</>
	);
};

export default ColorType;

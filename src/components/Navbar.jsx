import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<NavLink to="/">Inicio</NavLink>{" "}
				</li>
				<li>
					<NavLink to="/favorites">Favoritos</NavLink>
				</li>
			</ul>
		</nav>
		// <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
		// 	<div className="container-fluid">
		// 		<a className="navbar-brand" href="#">
		// 			PokeAPI
		// 		</a>
		// 		<button
		// 			className="navbar-toggler"
		// 			type="button"
		// 			data-bs-toggle="collapse"
		// 			data-bs-target="#navbarNav"
		// 			aria-controls="navbarNav"
		// 			aria-expanded="false"
		// 			aria-label="Toggle navigation">
		// 			<span className="navbar-toggler-icon"></span>
		// 		</button>
		// 		<div className="collapse navbar-collapse" id="navbarNav">
		// 			<ul className="navbar-nav">
		// 				<li className="nav-item">
		// 					<a className="nav-link active" aria-current="page" href="#">
		// 						Inicio
		// 					</a>
		// 				</li>
		// 				<li className="nav-item">
		// 					<a className="nav-link active">Acerca de</a>
		// 				</li>
		// 				<li className="nav-item">
		// 					<a className="nav-link active" aria-current="page" href="#">
		// 						Registrarse
		// 					</a>
		// 				</li>
		// 				<li className="nav-item">
		// 					<a className="nav-link active" href="#">
		// 						Iniciar sesión
		// 					</a>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </nav>
	);
};

export default Navbar;

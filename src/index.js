import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import "./css/styles.css";
import Favorites from "./routes/Favorites.jsx";
import Home from "./routes/Home.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<FavoritesProvider>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />}></Route>
					<Route path="/favorites" element={<Favorites />} />
				</Route>
			</Routes>
		</FavoritesProvider>
	</BrowserRouter>
);

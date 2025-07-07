import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { getAllProducts } from "../dataApi/getAllProducts";
import ProductCard from "../components/ProductCard/ProductCard";
const Home = () => {
	const [products, setProducts] = useState();
	console.log("hello", products);

	useEffect(() => {
		(async () => {
			const getAllData = await getAllProducts();
			setProducts(getAllData);
		})();
	}, []);
	return (
		<>
			<main className="flex flex-wrap pt-8 gap-8 justify-center">
				{products?.length > 0 &&
					products?.map((product, i) => {
            return <ProductCard key={i} product={product} />;
					})}
			</main>
		</>
	);
};

export default Home;

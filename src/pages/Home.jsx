import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { getAllProducts } from "../dataApi/getAllProducts";
const Home = () => {
  const [products, setProducts] = useState();
  console.log("hello",products);
  
  useEffect(() => {
    (async () => {
      const getAllData = await getAllProducts();
      setProducts(getAllData)
    })()
	}, []);
	return (
		<>
			<NavBar />
		</>
	);
};

export default Home;

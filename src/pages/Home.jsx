import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { getAllProducts, getCategories } from "../dataApi/getAllProducts";
import ProductCard from "../components/ProductCard/ProductCard";
const Home = () => {
	const [products, setProducts] = useState();
	const [categories, setCategories] = useState();
	console.log("hello", categories);

	useEffect(() => {
		(async () => {
			const getAllData = await getAllProducts();
			const getAllCategoryData = await getCategories();
			const updatedCategories = [{id:"1a",name:"All"},...getAllCategoryData]
			setProducts(getAllData);
			setCategories(updatedCategories);
		})();
	}, []);

	console.log(categories);


	const onCategoryClick = (category) => {
		const filterByCategory = products?.length > 0 && products?.filter(cate=>cate?.category?.name.toLowerCase()===category.toLowerCase())
		setProducts(filterByCategory);
		console.log(products);
		
	}

	return (
		<>
			<div className="flex gap-5 justify-center my-3">
				{
					categories?.map((category) => <div onClick={()=>onCategoryClick(category.name)} className="border hover:cursor-pointer border-blue-800/50 px-3 py-[3px] rounded-sm">{ category.name }</div>)
				}
			</div>
			<main className='flex flex-wrap pt-8 gap-8 justify-center'>
				{products?.length > 0 &&
					products?.map((product, i) => {
						return <ProductCard key={i} product={product} />;
					})}
			</main>
		</>
	);
};

export default Home;

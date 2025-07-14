export const getFilterByCategory = (products, category)=>{
    return category === "All" ? products : products.filter((cateProd)=>cateProd.category.name.toLowerCase()===category.toLowerCase())
}
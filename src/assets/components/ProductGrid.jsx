import React from 'react'
import ProductCard from "../components/ProductCard"
import { useSelector } from 'react-redux';

function ProductGrid()  {

  const products = useSelector((state) => state.product.filteredItems);
 
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap:8 my-24">
      {products.map((product)=> {
      return <ProductCard key={product.id} product={product}/>;
 } )
  }
    </div>
  );
}

export default ProductGrid

'use client';
import "./shoestore.css"
import { useEffect, useState } from "react"
import axios from "axios"

import Products from "@/components/allProducts/products";

export default function ShoeStore(){
  const[products,setProducts]  =useState([])
useEffect(()=>{
  axios.get("https://fakestoreapi.com/products").then((res)=>{
    console.log(res.data)
    setProducts(res.data)
  })
},[])

return (
  <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
    {products.map((product, index) => (
      <div key={index} className="flex justify-center">
        <div>
          <Products product={product} />
        </div>
      </div>
      
    ))}
  </div>
);

}
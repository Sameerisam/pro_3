"use client";

import { useParams } from "next/navigation";
import axios from "axios"
import { useEffect, useState } from "react"
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

export default function ProductDetail(){
   const { id } = useParams(); 
const [singleP,setSingle]=useState()
useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/${id}`).then((resp)=>{
     setSingle(resp.data)
  }).catch((e)=>{
    console.log(e)
  })
},[])
if(!singleP){
  return  <div className="flex items-center justify-center h-screen">Loading…</div>;
}

let renderRating=(rating)=>{
let str=[];
for(let i=1;i<=5;i++){
    if(i<=Math.floor(rating)){
      str.push(<FaStar className="text-yellow-400"/>)
    }
    else if(i==Math.ceil(rating)){
      str.push(<FaRegStarHalfStroke className="text-yellow-400"/>)
    }
    else{
      str.push(<FaRegStar className="text-gray-400"/>)
    }
}
  return str;
}



  return <>
  <div className="flex items-center justify-center mt-4 h-screen">
  <div className="w-80 border border-blue-200 rounded-lg shadow-md p-4">
    {/* Discount Badge */}
    <div className="relative">
      <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
        -20%
      </span>
      {/* Wishlist Icon */}
      <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
          />
        </svg>
      </button>
      {/* Product Image */}
      <div>
        <img
          src={singleP.image}
          alt="Product Image"
          className="object-contain w-full h-[270px] fill"
        />
      </div>
    </div>
    {/* Product Details */}
    <div className="mt-4">
      <h3 className="text-gray-800 font-medium text-base">
     {singleP.title}
      </h3>
      <h4 className="text-black font-light"><strong>description:</strong>{singleP.description}</h4>
      <p className="uppercase text-green-600 text-xs font-medium">{singleP.category}</p>
     {/* Ratings (from API) */}
     <p className="flex items-center mt-1.5 "><strong>Rating:</strong>{renderRating( singleP.rating.rate)}{singleP.rating.rate}</p>

      {/* Pricing */}
      <div className="flex items-end justify-between">
        <div className="flex items-baseline space-x-2 mt-2">
          <span className="text-blue-600 text-xl font-semibold">${singleP.price}</span>
          
        </div>
        <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

  </>
}

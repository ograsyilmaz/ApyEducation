import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {setProducts} from '../redux/actions/productAcions'
// import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) =>  state.allProducts.products);
  console.log(typeof products)
  const dispatch =useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
     dispatch(setProducts(response.data));
     console.log(response)
     console.log("databing ", products)
  };
  useEffect(() => {
    fetchProducts()
  },[]);
  
  return (
    <div className="ui grid container" style={{ marginTop: "10px" }}>
     
    
    </div>
  );
};

export default ProductListing;

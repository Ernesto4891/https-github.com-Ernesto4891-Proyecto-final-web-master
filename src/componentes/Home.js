import React,{useContext,useEffect} from "react";
import { ProductsContext } from "../context/ProductContext";
import Products from "./Products";
import Header from "./Header";
import Cart from "./Cart";

export default function Home(){

  const {setProductos} = useContext(ProductsContext);

  const getProducts=async ()=>{
    
    const response = await fetch ("https://62e9739301787ec712184e0d.mockapi.io/intrumentos");
            
    const intrumentos = await response.json();

    setProductos(intrumentos);
     
  }

  useEffect(()=> {

  getProducts()

  },[]);

  return (
        
      <>  
        <Header />
        <Products/>
        <Cart />
      </>
 
  );
}
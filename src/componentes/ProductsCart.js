import React,{useContext} from "react";
import { ProductsContext } from "../context/ProductContext";
import styles from '../estilos/productsCart.module.css'

export default function ProductsCart(){

  const {producCart,productDelete} = useContext(ProductsContext);

  return (

    <div className={styles.divCardCarrito} > {producCart.map(producto => {

      return (

        <div className={styles.cardCart} key={producto.id}>

          <button className={styles.suprButton} onClick={()=>productDelete(producto.id)}>X</button>

          <img className={styles.imgCart} src={producto.imagen} alt={producto.nombre}/>

          <p className={styles.nameProduct} ><b>{producto.nombre} </b> </p>

          <p className={styles.nameProduct}> Marca: {producto.marca}</p>

          <p className={styles.nameProduct}> <p>$ {producto.precio}</p> </p>

        </div>
      );

      } )}

    </div>
   
  ); 

}
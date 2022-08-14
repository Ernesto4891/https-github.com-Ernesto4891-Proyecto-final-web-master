import React, {useContext,} from 'react';
import {FaCartPlus} from 'react-icons/fa';
import { ProductsContext } from '../context/ProductContext';
import styles from '../estilos/products.module.css'

export default function Products(){

 const {productos,addCart} = useContext(ProductsContext);

 return (

    <div className={styles.containerCards} >
            
      {productos.map(producto=>{
        
      return (

       <div className={styles.cards} key={producto.id} >

          <button className={styles.buttonCart} onClick={()=>addCart(producto.id)} ><FaCartPlus/></button>  
                
          <img className={styles.productImg} src={producto.imagen}  alt={producto.imagen}/>

          <p className={styles.nameProduct}><b>{producto.nombre} :</b> {producto.descripcion}</p>

          <h2 className={styles.priceProduct}>${producto.precio}</h2> 
                
        </div>
 
      ); })}

    </div>

  );
}
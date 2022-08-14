import React,{useContext} from 'react';
import ProductsCart from './ProductsCart';
import { ProductsContext } from '../context/ProductContext';
import EmptyCart from './EmptyCart';
import styles from '../estilos/cart.module.css'

export default function  Cart(){

  const {total,clearCart,producCart,finalizarCompra} = useContext(ProductsContext);
 
  return (

    <>
      <div  className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" >
        
        <div className="offcanvas-header  canvasPrice">

          <h5  className={styles.totalPrice}>${total}</h5>
          
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
        
        </div>

        <div className="offcanvas-body"> 
              
          { producCart.length > 0 ? <ProductsCart/> : <EmptyCart/>}

        </div>
       
        <button className={styles.butonClear} onClick={()=>clearCart()}>Vaciar</button>
        
        <button className={styles.butonBuy} onClick={()=>finalizarCompra()}>Comprar</button>
       
      </div> 

    </> 
  );
}
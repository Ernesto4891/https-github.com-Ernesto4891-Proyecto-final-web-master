import React from 'react';
import styles from '../estilos/emptyCart.module.css'

export default function EmptyCart(){

  return (

     <p className={styles.emptyCart}>No hay productos en el carrito! </p>

  );
}
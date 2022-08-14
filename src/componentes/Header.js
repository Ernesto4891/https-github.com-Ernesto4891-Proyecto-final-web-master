import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import styles from '../estilos/header.module.css'

export default function Header(){

  return (

    <header className={styles.headerPage}>

      <button className={styles.menuPng}>
        <FiMenu/>
      </button> 
        
      <h1 className={styles.nameHeader}>BareKMusic</h1>
      
      <button className={styles.buttonCanvas} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        < FaShoppingCart/>
      </button>
     
    </header>

  );
  
}
import React from "react";
import styles from '../estilos/notFound.module.css'
import { FaSadTear } from 'react-icons/fa'


export default function NotFound(){
  return (
    <div className={styles.notFoundPage}>
      <p className={styles.msgError}>404 Not Found</p> 
      <p className={styles.icon}><FaSadTear/></p>
      <p className={styles.msg}>The requested URL was not found on this server.</p>
    </div>
  );
}
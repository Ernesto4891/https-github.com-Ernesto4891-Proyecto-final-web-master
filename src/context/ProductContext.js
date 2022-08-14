import React,{useState} from 'react';
import swal from 'sweetalert';

export const ProductsContext=React.createContext();

export default function ProductsProvider({children}){

    const [productos, setProductos] = useState([]);
    const [producCart, setProductCart] = useState([]);
    const [total, setTotal] = useState(0);

    function addCart(id){

      const result = producCart.find(courrent=>courrent.id===id);

      if (result=== undefined ) {

       const pushCart = productos.find(producto=>producto.id === id);

       setProductCart([...producCart,pushCart]);

       swal("Se agrego al carrito", "", "success");

       setTotal(total+pushCart.precio);
      } 

      else swal("El producto seleccionado, ya esta en el carrito!", "", "");

    }

    function productDelete(id){
        
       const restProduct = producCart.filter(producto=>producto.id !== id);

       const productoEliminar = productos.find(producto=>producto.id === id);
    
       setProductCart(restProduct);

       setTotal(total-productoEliminar.precio);    

    }
    
    function clearCart(){

      setProductCart([]) 
      setTotal(0)
    
    }

    function finalizarCompra(precio){
    
      if (producCart.length > 0){

      swal("Su compra se realizo correctamente!!! ","");

      clearCart()}
        
      else (swal("Antes agregue un producto!","","error"));

    }
    
  return (
    <ProductsContext.Provider value={
      {productos,setProductos,addCart,producCart,productDelete,total,clearCart,finalizarCompra}}>
      {children}
    </ProductsContext.Provider>
  );
}

import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './componentes/Home'
import ProductsProvider from './context/ProductContext';
import NotFound from './componentes/NotFound';

function App() {
 return (
    <ProductsProvider>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
}
export default App;

import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import './App.css'
import Home from './pages/home/home'
import Footer from './components/footer/footer';
import Categoria from './components/categorias/listarCategorias/listarCategorias'
import FormularioCategorias from './components/categorias/editarCategorias/edidarCategorias';
import DeletarCategoria from './components/categorias/deletarCategoria/deletarCategoria';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Categoria" element={<Categoria />} />
            <Route path="/cadastroCategoria" element={<FormularioCategorias />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategorias />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer  /> 
      </BrowserRouter>
    </>
  );
}

export default App;


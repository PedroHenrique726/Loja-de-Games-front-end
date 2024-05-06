import React from 'react'
import { Link } from 'react-router-dom'
import controle from '../../assets/controle.png';
import user from '../../assets/user.png';
import carrinho from '../../assets/carrinho.png';


function navbar() {



    return (
        <>
            <div className='w-full bg-cyan-950 text-white flex justify-center py-4'>
                <div className="container flex items-center justify-between text-lg">
                    <div className="flex items-center gap-2">
                        <img src={controle} alt="" className='w-10 h-10' />
                        <Link to='/home' className='text-2xl font-bold uppercase'>Loja de Games</Link>
                    </div>
                    <div className='flex gap-4'>
                        <div className='hover:underline'>Produtos</div>
                        <Link to='/categoria' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategoria'  className='hover:underline'>Cadastrar</Link>

                        <img src={user} alt="" className='w-10 h-10' />
                        <img src={carrinho} alt="" className='w-10 h-10' />
                    </div>
                </div>
            </div>
        </>



    )
}

export default navbar
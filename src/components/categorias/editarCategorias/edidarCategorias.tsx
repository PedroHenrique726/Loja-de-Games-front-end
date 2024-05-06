import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import categorias from '../../../models/categorias';
import { atualizar, buscar, cadastrar } from '../../../services/service';


function FormularioCategorias() {
  const [categorias, setCategorias] = useState<categorias>({} as categorias);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();


  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategorias);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategorias({
      ...categorias,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(categorias))
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categorias, setCategorias)

        alert('Categoria atualizada com sucesso')
        retornar()

      } catch (error: any) {
        
          alert('Erro ao atualizar a Categoria')  
      }

    } else {
      try {
        await cadastrar(`/categorias`, categorias, setCategorias)

        alert('Categoria cadastrada com sucesso')

      } catch (error: any) {
        console.log(categorias)
          alert('Erro ao cadastrado a Categoria')
        
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/categoria")
  }


  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre uma nova Categoria' : 'Editar Categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Tipo da Categoria</label>
          <input
            type="text"
            placeholder="tipo"
            name='tipo'
            className="border-2 border-slate-700 rounded p-2"
            value={categorias.tipo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioCategorias;
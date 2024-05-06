import React, { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/service';
import categorias from '../../../models/categorias';
import CardCategorias from '../cardCategorias/cardCategorias';


function ListaCategorias() {
  const [categorias, setCategorias] = useState<categorias[]>([]);

  let navigate = useNavigate();

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error: any) {
      if (error.toString().includes('400')) {
        alert('Categorias nao encontradas')
        navigate('/home')
      }
    }
  }


  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categorias) => (
              <>
                <CardCategorias key={categorias.id} categorias={categorias} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
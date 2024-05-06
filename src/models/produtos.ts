import categorias from "./categorias";

export default interface produtos {
    id: number;
    nome: string;
    preco: number;
    foto: string;
    curtir: number;
    categorias: categorias | null;
  }
import { filiais } from '../../bd/filial';

//Filtrar por coligadas
const filteredColigada1 = filiais.filter((e) => {
  return e.coligada == 1;
});
const filteredColigada4 = filiais.filter((e) => {
  return e.coligada == 4;
});
const filteredColigada9 = filiais.filter((e) => {
  return e.coligada == 9;
});

// Regras de retorno por coligadas
export const coligada1 = filteredColigada1.map((e) => {
  return { filial: e.filial, unidade: e.unidade };
});

export const coligada4 = filteredColigada4.map((e) => {
  return { filial: e.filial, unidade: e.unidade };
});

export const coligada9 = filteredColigada9.map((e) => {
  return { filial: e.filial, unidade: e.unidade };
});

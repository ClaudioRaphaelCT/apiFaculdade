import { alunos } from '../../bd/alunos';
//Rules Coligada 1
const filterColigada1 = alunos.filter((e) => {
  return e.coligada == 1;
});
export const alunosColigada1 = filterColigada1.map((e) => {
  return { filial: e.filial, ra: e.ra, nome: e.nome, curso: e.curso };
});

//Rules Coligada 4
const filterColigada4 = alunos.filter((e) => {
  return e.coligada == 4;
});
export const alunosColigada4 = filterColigada4.map((e) => {
  return { filial: e.filial, ra: e.ra, nome: e.nome, curso: e.curso };
});
//Rules Coligada 9
const filterColigada9 = alunos.filter((e) => {
  return e.coligada == 9;
});

export const alunosColigada9 = filterColigada9.map((e) => {
  return { filial: e.filial, ra: e.ra, nome: e.nome, curso: e.curso };
});

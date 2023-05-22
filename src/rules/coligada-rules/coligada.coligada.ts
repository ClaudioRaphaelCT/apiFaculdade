//Import dados das coligadas
import { coligadas } from '../../bd/coligadas';
//Rules coligada 1
const filteredColigada1 = coligadas.filter((e) => {
  return e.coligada == 1;
});
export const coligada1 = filteredColigada1.map((e) => {
  return { coligada: e.coligada, regiao: e.regiao };
});
// Rules coligada 4
const filteredColigada4 = coligadas.filter((e) => {
  return e.coligada == 4;
});
export const coligada4 = filteredColigada4.map((e) => {
  return { coligada: e.coligada, regiao: e.regiao };
});
// Rules coligada 9
const filteredColigada9 = coligadas.filter((e) => {
  return e.coligada == 9;
});
export const coligada9 = filteredColigada9.map((e) => {
  return { coligada: e.coligada, regiao: e.regiao };
});

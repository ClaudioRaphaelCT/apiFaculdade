export const erros = [
  {
    errorCode: 1,
    type: 'Acesso',
    msgErro: 'Acesso invalido',
    sugestion: 'Ajustar Headers - Password/Usuario',
    example: 'User = Top, Password = ****',
  },
  {
    errorCode: 2,
    type: 'Body-Coligada',
    msgErro: 'Body vazio',
    sugestion: 'Ajustar JSON - Colocar body antes do envio',
    example: 'coligada : 1',
  },
  {
    errorCode: 3,
    type: 'Body-Coligada',
    msgErro: 'Coligada não é NUMBER',
    sugestion: 'Ajustar JSON - Colocar coligada como um number antes do envio',
    example: 'coligada : 1',
  },
  {
    errorCode: 4,
    type: 'Body-Coligada',
    msgErro: 'Coligada inexistente',
    sugestion: 'Ajustar JSON - As coligadas existentes são: [1, 4, 9]',
    example: 'coligada : 9',
  },
  {
    errorCode: 5,
    type: 'Body-Filial',
    msgErro: 'Filial não foi enviada',
    sugestion: 'Ajustar JSON - Inserir a filial no JSON',
    example: 'coligada : 9, filial: 1',
  },
  {
    errorCode: 6,
    type: 'Body-Coligada',
    msgErro: 'Filial não é NUMBER',
    sugestion: 'Ajustar JSON - Colocar filial como um number antes do envio',
    example: 'coligada : 1, filial: 1',
  },
];

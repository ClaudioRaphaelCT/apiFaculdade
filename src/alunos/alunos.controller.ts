import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Request,
  Response,
} from '@nestjs/common';
import { alunos } from '../bd/alunos';
// Alunos Rules
import {
  alunosColigada1,
  alunosColigada9,
  alunosColigada4,
} from '../rules/alunos-rules/alunos-coligada';

@Controller('alunos')
export class AlunosController {
  @Get('all')
  findAll(@Request() req, @Response() res) {
    const content = req.headers['user'];
    const password = req.headers['password'];
    if (content === 'Top' && password === '2023') {
      return res.send({
        status: 'Alunos de todas as coligadas e filiais',
        alunos: alunos,
      });
    } else {
      res.status(500).send({
        status: 'Erro',
        type: 'User ou Password, incorretos',
        date: Date(),
      });
    }
  }

  @Get('coligada')
  findOne(@Body() body, @Request() req, @Response() res) {
    const content = req.headers['user'];
    const password = req.headers['password'];
    const coligada = req.body.coligada;
    if (content === 'Top' && password === '2023' && coligada == 1) {
      return res.send({ regiao: 'Recife - PE', alunos: alunosColigada1 });
    } else if (content === 'Top' && password === '2023' && coligada == 4) {
      return res.send({ regiao: 'Belém - PA', result: alunosColigada4 });
    } else if (content === 'Top' && password === '2023' && coligada == 9) {
      return res.send({ regiao: 'Salvador - Bahia', result: alunosColigada9 });
    } else if (coligada !== 1 || coligada !== 4 || coligada !== 9) {
      return res.status(401).send({
        status: 'Error',
        errorType: 'Coligada',
        msgError: 'Coligada enviada no body inexistente',
      });
    } else {
      return res.send({
        status: 'Erro',
        errorType: 'Acesso invalido',
        msgError: 'Usuario/Password invalidos',
      });
    }
  }
  @Post('/insert')
  insertOne(@Body() body, @Request() req, @Response() res) {
    const coligada = req.body['coligada'];
    const filial = req.body['filial'];
    const curso = req.body['curso'];
    const ra = req.body['ra'];
    const nome = req.body['nome'];
    alunos.push({
      coligada: coligada,
      filial: filial,
      curso: curso,
      ra: ra,
      nome: nome,
    });
    res
      .status(201)
      .send({ status: `Aluno ${nome} inserido na lista de alunos!` });
  }
  @Delete('/delete')
  deleteOne(@Body() body, @Request() req, @Response() res) {
    const ra = req.body['ra'];
    const index = alunos.findIndex((item) => (item.ra === ra));

    if (index !== -1) {
      alunos.splice(index, 1);
      return res.status(202).send({ status: 'Aluno excluido com sucesso!' });
    } else {
      return res.send(index);
    }
  }
}

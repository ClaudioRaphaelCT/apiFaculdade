import { Controller, Get, Request, Response } from '@nestjs/common';
import { filiais } from '../bd/filial';
import {
  erroCode1,
  erroCode2,
  erroCode3,
  erroCode4,
  erroCode5,
  erroCode6,
} from '../rules/error-rules/error.rules';
import {
  coligada1,
  coligada4,
  coligada9,
} from '../rules/filiais-rules/filiais.coligada';

@Controller('filiais')
export class FiliaisController {
  @Get('all')
  findAll(@Request() req, @Response() res) {
    const content = req.headers['user'];
    const password = req.headers['password'];

    if (content === 'Top' && password === '2023') {
      return res.send(filiais);
    } else {
      res.status(500).send({
        status: 'Erro',
        type: 'User ou Password, incorretos',
        date: Date(),
      });
    }
  }
  @Get('/coligada')
  findOne(@Request() req, @Response() res) {
    const user = req.headers['user'];
    const password = req.headers['password'];
    const coligada = req.body['coligada'];
    if (user === 'Top' && password === '2023' && coligada === 1) {
      return res
        .status(200)
        .send({ regiao: 'Recife - Pe', filiais: coligada1 });
    } else if (user === 'Top' && password === '2023' && coligada === 4) {
      return res.status(200).send({ regiao: 'Belém - PA', filiais: coligada4 });
    } else if (user === 'Top' && password === '2023' && coligada === 9) {
      return res.status(200).send({ regiao: 'Belém - PA', filiais: coligada9 });
    } else if (user !== 'Top' || password !== '2023') {
      return res.send(erroCode1);
    } else if (coligada == null) {
      return res.status(401).send(erroCode2);
    } else if (typeof coligada !== 'number') {
      return res.status(401).send(erroCode3);
    } else {
      return res.send(erroCode4);
    }
  }
  @Get('/filial')
  findOneFilial(@Request() req, @Response() res) {
    const user = req.headers['user'];
    const password = req.headers['password'];
    const coligada = req.body['coligada'];
    const filial = req.body['filial'];
    if (user !== 'Top' && password !== '2023') {
      return res.status(400).send(erroCode1);
    }
    if (coligada == null) {
      return res.status(401).send(erroCode2);
    }
    if (filial == null) {
      return res.status(401).send(erroCode5);
    }
    if (typeof coligada !== 'number') {
      return res.status(401).send(erroCode3);
    }
    if (typeof filial !== 'number') {
      return res.status(401).send(erroCode6);
    }
    if (coligada == 4) {
      const c4 = coligada4.filter((e) => {
        return e.filial == filial;
      });
      return res.send(c4);
    }
    if (coligada == 9) {
      const c9 = coligada9.filter((e) => {
        return e.filial == filial;
      });
      return res.send(c9);
    } else {
      return res.send('erro');
    }
  }
}

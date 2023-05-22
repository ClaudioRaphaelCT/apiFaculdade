import { Controller, Get, Response, Request } from '@nestjs/common';
import { coligadas } from '../bd/coligadas';
import {
  erroCode1,
  erroCode2,
  erroCode3,
  erroCode4,
} from '../rules/error-rules/error.rules';
import {
  coligada1,
  coligada4,
  coligada9,
} from '../rules/coligada-rules/coligada.coligada';

@Controller('coligadas')
export class ColigadasController {
  @Get('all')
  findAll(@Request() req, @Response() res) {
    const user = req.headers['user'];
    const password = req.headers['password'];
    if (user === 'Top' && password === '2023') {
      return res.status(200).send(coligadas);
    } else {
      res.status(400).send(erroCode1);
    }
  }
  @Get('coligada')
  findOne(@Response() res, @Request() req) {
    const user = req.headers['user'];
    const password = req.headers['password'];
    const coligada = req.body['coligada'];
    if (user === 'Top' && password === '2023' && coligada === 1) {
      return res.status(200).send({ coligada: coligada1 });
    } else if (user === 'Top' && password === '2023' && coligada === 4) {
      return res.status(200).send({ coligada: coligada4 });
    } else if (user === 'Top' && password === '2023' && coligada === 9) {
      return res.status(200).send({ coligada: coligada9 });
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
}

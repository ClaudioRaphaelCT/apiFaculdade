import { Module } from '@nestjs/common';
import { ColigadasController } from './coligadas.controller';

@Module({
  controllers: [ColigadasController]
})
export class ColigadasModule {}

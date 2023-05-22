import { Module } from '@nestjs/common';
import { FiliaisController } from './filiais.controller';

@Module({
  controllers: [FiliaisController]
})
export class FiliaisModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosModule } from './alunos/alunos.module';
import { ColigadasModule } from './coligadas/coligadas.module';
import { FiliaisModule } from './filiais/filiais.module';

@Module({
  imports: [AlunosModule, ColigadasModule, FiliaisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { StatustypeService } from './statustype.service';
import { StatustypeResolver } from './statustype.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [StatustypeResolver, StatustypeService, PrismaService]
})
export class StatustypeModule {}

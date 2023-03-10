import { Module } from '@nestjs/common';
import { ContributorService } from './contributor.service';
import { ContributorResolver } from './contributor.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ContributorResolver, ContributorService, PrismaService]
})
export class ContributorModule {}

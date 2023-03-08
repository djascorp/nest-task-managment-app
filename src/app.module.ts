import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaService } from './prisma.service';
import { StatustypeModule } from './statustype/statustype.module';



@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      debug: true,
      typePaths: ['./**/*.graphql']
    }),
    StatustypeModule,
  ],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}

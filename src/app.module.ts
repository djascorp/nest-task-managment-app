import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaService } from './prisma.service';
import { StatustypeModule } from './statustype/statustype.module';
import { StatusModule } from './status/status.module';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { ContributorModule } from './contributor/contributor.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      debug: true,
      typePaths: ['./**/*.graphql']
    }),
    StatustypeModule,
    StatusModule,
    UserModule,
    ProjectModule,
    ContributorModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}

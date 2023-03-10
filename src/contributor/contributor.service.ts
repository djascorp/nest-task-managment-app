import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateContributorInput } from './dto/create-contributor.input';
import { UpdateContributorInput } from './dto/update-contributor.input';

@Injectable()
export class ContributorService {
  constructor(private prisma: PrismaService) { }

  create(createContributorInput: CreateContributorInput) {
    return this.prisma.contributor.create({
      data: createContributorInput
    });
  }

  findAll() {
    return this.prisma.contributor.findMany({
      include: {
        project: true,
        user: true,
      },
    });
  }

  findOne(projectId: number, userId: number) {
    return this.prisma.contributor.findUnique({
      where: {
        projectId_userId: {
          projectId,
          userId
        }
      },
      include:{
        project: true,
        user: true,
      }
    });
  }

  update(updateContributorInput: UpdateContributorInput) {
    return this.prisma.contributor.update({
      where: {
        projectId_userId: {
          projectId: updateContributorInput.projectId,
          userId: updateContributorInput.userId
        },
      },
      data: updateContributorInput,
      include:{
        project: true,
        user: true,
      }
    });
  }

  remove(projectId: number, userId: number) {
    return this.prisma.contributor.delete({
      where: {
        projectId_userId: {
          projectId,
          userId
        }
      }
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService){}

  create(createProjectInput: CreateProjectInput) {
    return this.prisma.project.create({
      data: createProjectInput
    });
  }

  findAll() {
    return this.prisma.project.findMany({
      include:{
        creator: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.project.findUnique({
      where: {id},
      include:{
        creator: true
      }
    });
  }

  update(id: number, updateProjectInput: UpdateProjectInput) {
    return this.prisma.project.update({
      where: {id},
      data: updateProjectInput,
      include:{
        creator: true
      }
    });
  }

  remove(id: number) {
    return this.prisma.project.delete({
      where: {id}
    });
  }
}

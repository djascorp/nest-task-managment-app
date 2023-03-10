import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateStatusInput } from './dto/create-status.input';
import { UpdateStatusInput } from './dto/update-status.input';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService){}

  create(createStatusInput: CreateStatusInput) {
    return this.prisma.status.create({
      data: createStatusInput
    });
  }

  findAll() {
    return this.prisma.status.findMany({
      include: {
        type: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.status.findUnique({
      where: {id},
      include: {
        type: true,
      }
    });
  }

  update(id: number, updateStatusInput: UpdateStatusInput) {
    return this.prisma.status.update({
      where: {id},
      include: {
        type: true,
      },
      data: updateStatusInput
    });
  }

  remove(id: number) {
    return this.prisma.status.delete({
      where: {id}
    });
  }
}

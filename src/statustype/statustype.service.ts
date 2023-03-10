import { Injectable } from '@nestjs/common';
import { Statustype } from '@prisma/client';

import {PrismaService} from "../prisma.service"

@Injectable()
export class StatustypeService {
  constructor(private prisma: PrismaService){}

  create(data: Statustype) {
    return this.prisma.statustype.create({
      data: {
        name: data.name
      }
    });
  }

   findAll() {
    return this.prisma.statustype.findMany();
  }

  findOne(id: number) {
    return this.prisma.statustype.findUnique({
      where: {id: id}
    });
  }

  update(id: number, data: Statustype) {
    return this.prisma.statustype.update({
      where: {id: id},
      data: {
        name: data.name
      }
    });
  }

  remove(id: number) {
    return this.prisma.statustype.delete({
      where: {id: id}
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { FilterExpenseDto } from './dto/filter-expense.dto';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  async create(createExpenseDto: CreateExpenseDto) {
    return this.prisma.expense.create({
      data: createExpenseDto,
    });
  }

  async findAll(filter?: FilterExpenseDto) {
    const where: any = {};
    if (filter?.month && filter?.year) {
        where.date = {
        gte: new Date(filter.year, filter.month - 1, 1),
        lte: new Date(filter.year, filter.month, 0),
        };
    }
    return this.prisma.expense.findMany({ where });
    }

  async findOne(id: string) {
    return this.prisma.expense.findUnique({ where: { id } });
  }

  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    return this.prisma.expense.update({
      where: { id },
      data: updateExpenseDto,
    });
  }

  async remove(id: string) {
    return this.prisma.expense.delete({ where: { id } });
  }
}
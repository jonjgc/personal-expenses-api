import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { FilterExpenseDto } from './dto/filter-expense.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('expenses')
@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova despesa' })
  @ApiResponse({ status: 201, description: 'Despesa criada com sucesso' })
  create(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expensesService.create(createExpenseDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as despesas com filtro opcional' })
  findAll(@Query() filter: FilterExpenseDto) {
    return this.expensesService.findAll(filter);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma despesa pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID único da despesa (UUID)' })
  @ApiResponse({ status: 200, description: 'Despesa encontrada' })
  @ApiResponse({ status: 404, description: 'Despesa não encontrada' })
  findOne(@Param('id') id: string) {
    return this.expensesService.findOne(id);
  }

 @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma despesa pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID único da despesa (UUID)' })
  @ApiResponse({ status: 200, description: 'Despesa atualizada com sucesso' })
  @ApiResponse({ status: 404, description: 'Despesa não encontrada' })
  @ApiResponse({ status: 400, description: 'Dados inválidos fornecidos' })
  update(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
    return this.expensesService.update(id, updateExpenseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir uma despesa pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID único da despesa (UUID)' })
  @ApiResponse({ status: 200, description: 'Despesa excluída com sucesso' })
  @ApiResponse({ status: 404, description: 'Despesa não encontrada' })
  remove(@Param('id') id: string) {
    return this.expensesService.remove(id);
  }
}
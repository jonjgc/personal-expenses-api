import { IsString, IsNumber, IsDateString, MinLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExpenseDto {
  @ApiProperty({ example: 'Almoço', description: 'Título da despesa' })
  @IsString()
  @MinLength(3)
  title: string;

  @ApiProperty({ example: 50.0, description: 'Valor da despesa' })
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiProperty({ example: 'Alimentação', description: 'Categoria da despesa' })
  @IsString()
  @MinLength(3)
  category: string;

  @ApiProperty({ example: '2025-05-28', description: 'Data da despesa (formato ISO)' })
  @IsDateString()
  date: string;
}
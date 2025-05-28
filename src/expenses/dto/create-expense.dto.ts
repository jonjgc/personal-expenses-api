import { IsString, IsNumber, IsDateString, MinLength, Min } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsNumber()
  @Min(0)
  amount: number;

  @IsString()
  @MinLength(3)
  category: string;

  @IsDateString()
  date: string;
}
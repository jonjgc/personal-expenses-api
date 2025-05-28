import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ExpensesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

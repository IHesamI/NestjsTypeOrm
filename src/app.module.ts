import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Payments as Payments_Entity } from './types/payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsModule } from './dvd/payments.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'hesam',
      database: 'DVDRental',
      entities:[Payments_Entity],
      synchronize: false,
    }
  ),PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

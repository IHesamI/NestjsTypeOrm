import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Payments as Payments_Entity } from './types/payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsModule } from './dvd/payments.module';
import { Actors, Actors_info } from './actors/entities/actor.entity';
import { ActorsModule } from './actors/actors.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'hesam',
      database: 'DVDRental',
      entities:[Payments_Entity,Actors,Actors_info],
      synchronize: true,
    }
  ),PaymentsModule, ActorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

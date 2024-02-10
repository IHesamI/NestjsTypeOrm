import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Payments as Payments_Entity } from './types/payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsModule } from './dvd/payments.module';
import { Actors, Actors_info } from './actors/entities/actor.entity';
import { ActorsModule } from './actors/actors.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }
  ),
    TypeOrmModule.forRootAsync(
    { imports:[ConfigModule],
      useFactory:(configService:ConfigService)=>({
        type: 'postgres',
      host: configService.get<string>('DATABASE_HOST'),
      port: parseInt(configService.get<string>('DATABASE_PORT')),
      username: configService.get<string>('DATABASE_USER'),
      password: configService.get<string>('DATABASE_PASSWORD'),
      database: configService.get<string>('DATABASE_DATBASE'),
      entities:[Payments_Entity,Actors,Actors_info],
      synchronize: true,
      }),
      inject: [ConfigService],
    }
  ),PaymentsModule, ActorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

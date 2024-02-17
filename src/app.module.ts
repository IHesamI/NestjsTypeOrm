import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor, Actors_info } from './actors/entities/actor.entity';
import { ActorsModule } from './actors/actors.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FilmsModule } from './films/films.module';
import { Category, Film } from './films/entities/film.entity';
import { StaffModule } from './staff/staff.module';
import Language from './films/entities/language.entity';
import { Staff } from './staff/entities/staff.entity';
import { Address } from './types/address.entity';
import { City } from './types/city.entity';
import { Country } from './types/country.entity';
import { Store } from './staff/entities/store.entity';
import { Inventory } from './types/Inventory.entity';
import { CustomersModule } from './customers/customers.module';
import { PaymentsModule } from './payments/payments.module';
import { Rental } from './types/rental.entity';
import { Customer } from './customers/entities/customer.entity';
import { Payment } from './payments/entities/payment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }
    ),
    TypeOrmModule.forRootAsync(
      {
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          host: configService.get<string>('DATABASE_HOST'),
          port: parseInt(configService.get<string>('DATABASE_PORT')),
          username: configService.get<string>('DATABASE_USER'),
          password: configService.get<string>('DATABASE_PASSWORD'),
          database: configService.get<string>('DATABASE_DATBASE'),
          entities: [Actor, Actors_info, Language, Film, Category, Staff, Address, City, Country, Store,Inventory ,Rental,Customer,Payment],
          synchronize: true,
        }),
        inject: [ConfigService],
      }
    ), ActorsModule, FilmsModule, StaffModule, CustomersModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

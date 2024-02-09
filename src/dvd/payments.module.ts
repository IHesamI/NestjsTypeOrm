import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Payments as PaymentsController } from "./payments.controller";
import { Payments } from "src/types/payment.entity";
import { PaymentsService} from "./payments.service";

@Module({
    imports: [TypeOrmModule.forFeature([Payments])],
    providers:[PaymentsService],
    controllers: [PaymentsController],
})
export class PaymentsModule{}
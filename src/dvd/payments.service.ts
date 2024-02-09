import { Injectable } from "@nestjs/common";
import { Payments } from "src/types/payment.entity";
import { DataSource } from "typeorm";


@Injectable()
export class PaymentsService {
    constructor(private dataSource: DataSource) { }

    async findAll() {
        const results = await this.dataSource
            .getRepository(Payments)
            .createQueryBuilder()
            .getMany();
        // .createQueryBuilder()
        // .select('payment')
        // .from(Payments, 'payment')
        // .getMany();
        console.error(results);
        return this.dataSource.manager.find(Payments);
    }

}
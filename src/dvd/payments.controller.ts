import { Controller, Get, Response } from "@nestjs/common";
import { PaymentsService } from "./payments.service";

@Controller('payments')
export class Payments {

    constructor(private paymentsService: PaymentsService) { }

    @Get('/')
    getAll() {
        console.error('in the getall');
        this.paymentsService.findAll();
        return 'all';

    }
}
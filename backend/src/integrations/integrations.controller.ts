import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';
import { CreatePayableDto } from 'src/dto/create-payable.dto';

@Controller('integrations')
export class IntegrationsController {
    constructor(private readonly integrationsService: IntegrationsService) { }

    @Post('payable')
    async createPayable(@Body() createPayableDto: CreatePayableDto) {
        const result = await this.integrationsService.createPayable(createPayableDto);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return result.data;
    }

    @Get('payable/:id')
    async getPayable(@Param('id') id: string) {
        const result = await this.integrationsService.getPayable(id);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.NOT_FOUND);
        }
        return result.data;
    }

    @Get('assignor/:id')
    async getAssignor(@Param('id') id: string) {
        const result = await this.integrationsService.getAssignor(id);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.NOT_FOUND);
        }
        return result.data;
    }
}

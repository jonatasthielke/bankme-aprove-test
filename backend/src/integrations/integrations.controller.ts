import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Delete, Patch } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';
import { CreatePayableDto, UpdatePayableDto } from 'src/dto/payable.dto';
import { CreateAssignorDto, UpdateAssignorDto } from 'src/dto/assignor.dto';

@Controller('integrations')
export class IntegrationsController {
    constructor(private readonly integrationsService: IntegrationsService) { }

    // Endpoints para Payable
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

    @Get('payable')
    async getAllPayables() {
        const result = await this.integrationsService.getAllPayables();
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.NOT_FOUND);
        }
        return result.data;
    }

    @Put('payable/:id')
    async updatePayable(@Param('id') id: string, @Body() updatePayableDto: UpdatePayableDto) {
        const result = await this.integrationsService.updatePayable(id, updatePayableDto);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return result.data;
    }

    @Delete('payable/:id')
    async deletePayable(@Param('id') id: string) {
        const result = await this.integrationsService.deletePayable(id);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return result.message;
    }

    @Patch('payable/:id')
    async partialUpdatePayable(@Param('id') id: string, @Body() updatePayableDto: UpdatePayableDto) {
        const result = await this.integrationsService.partialUpdatePayable(id, updatePayableDto);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return result.data;
    }

    // Endpoints para Assignor
    @Post('assignor')
    async createAssignor(@Body() createAssignorDto: CreateAssignorDto) {
        const result = await this.integrationsService.createAssignor(createAssignorDto);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
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

    @Get('assignor')
    async getAllAssignors() {
        const result = await this.integrationsService.getAllAssignors();
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.NOT_FOUND);
        }
        return result.data;
    }

    @Put('assignor/:id')
    async updateAssignor(@Param('id') id: string, @Body() updateAssignorDto: UpdateAssignorDto) {
        const result = await this.integrationsService.updateAssignor(id, updateAssignorDto);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return result.data;
    }

    @Delete('assignor/:id')
    async deleteAssignor(@Param('id') id: string) {
        const result = await this.integrationsService.deleteAssignor(id);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return result.message;
    }

    @Patch('assignor/:id')
    async partialUpdateAssignor(@Param('id') id: string, @Body() updateAssignorDto: UpdateAssignorDto) {
        const result = await this.integrationsService.partialUpdateAssignor(id, updateAssignorDto);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return result.data;
    }

    @Post('auth')
    async auth(@Body() login: any) {
        return { success: true };
    }
}

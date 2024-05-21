import { Injectable } from '@nestjs/common';
import { CreatePayableDto } from 'src/dto/create-payable.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IntegrationsService {
    constructor(private readonly prisma: PrismaService) { }

    async createPayable(createPayableDto: CreatePayableDto) {
        try {
            const payable = await this.prisma.payable.create({
                data: {
                    ...createPayableDto,
                    emissionDate: new Date(createPayableDto.emissionDate),
                    assignor: {
                        connect: { id: createPayableDto.assignor }
                    }
                }
            });
            return { success: true, data: payable };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }

    async getPayable(id: string) {
        try {
            const payable = await this.prisma.payable.findUnique({ where: { id } });
            if (!payable) throw new Error('Payable not found');
            return { success: true, data: payable };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }

    async getAssignor(id: string) {
        try {
            const assignor = await this.prisma.assignor.findUnique({ where: { id } });
            if (!assignor) throw new Error('Assignor not found');
            return { success: true, data: assignor };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }
}

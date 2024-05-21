import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePayableDto, UpdatePayableDto } from '../dto/payable.dto';
import { CreateAssignorDto, UpdateAssignorDto } from '../dto/assignor.dto';

@Injectable()
export class IntegrationsService {
    constructor(private readonly prisma: PrismaService) { }

    // Métodos para Payable
    async createPayable(createPayableDto: CreatePayableDto) {
        try {
            const payable = await this.prisma.payable.create({
                data: {
                    emissionDate: createPayableDto.emissionDate,
                    value: createPayableDto.value,
                    assignorId: createPayableDto.assignor
                },
            });
            return { success: true, data: payable };
        } catch (error) {
            return { success: false, message: 'Failed to create payable' };
        }
    }

    async getPayable(id: string) {
        try {
            const payable = await this.prisma.payable.findUnique({
                where: { id },
            });
            if (!payable) {
                return { success: false, message: 'Payable not found' };
            }
            return { success: true, data: payable };
        } catch (error) {
            return { success: false, message: 'Failed to get payable' };
        }
    }

    async getAllPayables() {
        try {
            const payables = await this.prisma.payable.findMany();
            return { success: true, data: payables };
        } catch (error) {
            return { success: false, message: 'Failed to get all payables' };
        }
    }

    async updatePayable(id: string, updatePayableDto: UpdatePayableDto) {
        try {
            const payable = await this.prisma.payable.update({
                where: { id },
                data: {
                    assignorId: updatePayableDto.assignor,
                    emissionDate: updatePayableDto.emissionDate,
                    value: updatePayableDto.value,
                },
            });
            return { success: true, data: payable };
        } catch (error) {
            return { success: false, message: 'Failed to update payable' };
        }
    }

    async deletePayable(id: string) {
        try {
            await this.prisma.payable.delete({
                where: { id },
            });
            return { success: true, message: 'Payable deleted successfully' };
        } catch (error) {
            return { success: false, message: 'Failed to delete payable' };
        }
    }

    async partialUpdatePayable(id: string, updatePayableDto: UpdatePayableDto) {
        try {
            const payable = await this.prisma.payable.update({
                where: { id },
                data: {
                    assignorId: updatePayableDto.assignor,
                    emissionDate: updatePayableDto.emissionDate,
                    value: updatePayableDto.value,
                },
            });
            return { success: true, data: payable };
        } catch (error) {
            return { success: false, message: 'Failed to partially update payable' };
        }
    }

    // Métodos para Assignor
    async createAssignor(createAssignorDto: CreateAssignorDto) {
        try {
            const assignor = await this.prisma.assignor.create({
                data: createAssignorDto,
            });
            return { success: true, data: assignor };
        } catch (error) {
            return { success: false, message: 'Failed to create assignor' };
        }
    }

    async getAssignor(id: string) {
        try {
            const assignor = await this.prisma.assignor.findUnique({
                where: { id },
            });
            if (!assignor) {
                return { success: false, message: 'Assignor not found' };
            }
            return { success: true, data: assignor };
        } catch (error) {
            return { success: false, message: 'Failed to get assignor' };
        }
    }

    async getAllAssignors() {
        try {
            const assignors = await this.prisma.assignor.findMany();
            return { success: true, data: assignors };
        } catch (error) {
            return { success: false, message: 'Failed to get all assignors' };
        }
    }

    async updateAssignor(id: string, updateAssignorDto: UpdateAssignorDto) {
        try {
            const assignor = await this.prisma.assignor.update({
                where: { id },
                data: updateAssignorDto,
            });
            return { success: true, data: assignor };
        } catch (error) {
            return { success: false, message: 'Failed to update assignor' };
        }
    }

    async deleteAssignor(id: string) {
        try {
            await this.prisma.assignor.delete({
                where: { id },
            });
            return { success: true, message: 'Assignor deleted successfully' };
        } catch (error) {
            return { success: false, message: 'Failed to delete assignor' };
        }
    }

    async partialUpdateAssignor(id: string, updateAssignorDto: UpdateAssignorDto) {
        try {
            const assignor = await this.prisma.assignor.update({
                where: { id },
                data: updateAssignorDto,
            });
            return { success: true, data: assignor };
        } catch (error) {
            return { success: false, message: 'Failed to partially update assignor' };
        }
    }
}

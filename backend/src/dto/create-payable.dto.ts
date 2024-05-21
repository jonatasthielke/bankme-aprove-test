// src/integrations/dto/create-payable.dto.ts
import { IsUUID, IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class CreatePayableDto {
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @IsNumber()
    value: number;

    @IsDateString()
    emissionDate: string;

    @IsUUID()
    @IsNotEmpty()
    assignor: string;
}

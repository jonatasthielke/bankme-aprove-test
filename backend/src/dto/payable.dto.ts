import { IsUUID, IsNotEmpty, IsString, IsEmail, IsPhoneNumber, MaxLength, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreatePayableDto {
    @IsUUID()
    @IsNotEmpty()
    readonly id: string;

    @IsNumber()
    readonly value: number;

    @IsDateString()
    readonly emissionDate: string;

    @IsUUID()
    @IsNotEmpty()
    readonly assignor: string;
}

export class UpdatePayableDto {
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsNumber()
    @IsOptional()
    readonly value?: number;

    @IsDateString()
    @IsOptional()
    readonly emissionDate?: string;

    @IsUUID()
    @IsOptional()
    readonly assignor?: string;
}
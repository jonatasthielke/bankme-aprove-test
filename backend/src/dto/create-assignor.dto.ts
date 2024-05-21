// src/integrations/dto/create-payable.dto.ts
import { IsUUID, IsNotEmpty, IsString, IsEmail, IsPhoneNumber, MaxLength } from 'class-validator';

export class CreateAssignorDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  document: string;

  @IsEmail()
  @MaxLength(140)
  email: string;

  @IsPhoneNumber(null)
  @MaxLength(20)
  phone: string;

  @IsString()
  @MaxLength(140)
  @IsNotEmpty()
  name: string;
}

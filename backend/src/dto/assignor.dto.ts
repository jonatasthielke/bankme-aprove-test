import { IsUUID, IsNotEmpty, IsString, IsEmail, IsPhoneNumber, MaxLength, IsOptional } from 'class-validator';

export class CreateAssignorDto {
  @IsUUID()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly document: string;

  @IsEmail()
  @MaxLength(140)
  readonly email: string;

  @IsPhoneNumber(null)
  @MaxLength(20)
  readonly phone: string;

  @IsString()
  @MaxLength(140)
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateAssignorDto {
  @IsUUID()
  @IsOptional()
  readonly id: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly document: string;

  @IsEmail()
  @MaxLength(140)
  @IsOptional()
  readonly email: string;

  @IsPhoneNumber(null)
  @MaxLength(20)
  @IsOptional()
  readonly phone: string;

  @IsString()
  @MaxLength(140)
  @IsOptional()
  readonly name: string;
}

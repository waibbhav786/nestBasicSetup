import { Type } from "class-transformer";
import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested,
  } from "class-validator";

export class CreateUserDTO{
 @IsString()
 @IsNotEmpty()
 name:string;

 @IsString()
 @IsNotEmpty()
 email:string;

 @IsString()
 @IsNotEmpty()
 phone:String

 @IsString()
 @IsNotEmpty()
 password:string
}
  
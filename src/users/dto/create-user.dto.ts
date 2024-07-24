import { IsString, IsEmail, IsEnum, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(["ADMIN","SALES"], {
    message: "Valid role required"
  })
  role: "ADMIN" | "SALES";
}
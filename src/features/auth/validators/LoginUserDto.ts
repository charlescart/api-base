import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export default class SignupUserDto {
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @MinLength(5)
  password!: string;
}
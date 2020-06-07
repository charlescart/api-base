import {
  Length, IsEmail, IsNotEmpty, MinLength,
} from 'class-validator';

export default class SignupUserDto {
  @IsNotEmpty()
  @Length(3, 15)
  name!: string;

  @IsNotEmpty()
  @Length(3, 15)
  surname!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @MinLength(5)
  password!: string;
}

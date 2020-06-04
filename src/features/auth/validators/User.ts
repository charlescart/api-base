import { Length, IsEmail, IsDate } from "class-validator";

export default class User {

  // Ronny, tuve que ponerle a todas "| undefined" porque me daba error

  @IsNotEmpty()
  @Length(3, 15)
  name!: string;

  @IsNotEmpty()
  @IsEmail()
  email: string | undefined;

  // tuve que comentar este, quiero validar que minimo sean 5 digitos la clave

import { Length, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export default class UserDto {
  @IsNotEmpty()
  @Length(3, 15)
  name: string | undefined;

  @IsNotEmpty()
  @Length(3, 15)
  surname: string | undefined;

  @IsNotEmpty()
  @IsEmail()
  email: string | undefined;

  @IsNotEmpty()
  @MinLength(5)
  password: string | undefined;
}
  readonly password: string | undefined; */
}

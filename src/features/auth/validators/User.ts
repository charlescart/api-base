import { Length, IsEmail, IsDate } from "class-validator";

export default class User {

  // Ronny, tuve que ponerle a todas "| undefined" porque me daba error

  @Length(3, 15)
  readonly name: string | undefined;
  readonly surname: string | undefined;

  @IsEmail()
  readonly email: string | undefined;

  // tuve que comentar este, quiero validar que minimo sean 5 digitos la clave

  /* @length(5)
  readonly password: string | undefined; */
}
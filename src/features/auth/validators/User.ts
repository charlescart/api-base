import { Length, IsEmail, IsDate } from "class-validator";

export default class User {

  // Ronny, tuve que ponerle a todas "| undefined" porque me daba error

  @IsNotEmpty()
  @Length(3, 15)
  name!: string;

  @IsEmail()
  readonly email: string | undefined;

  // tuve que comentar este, quiero validar que minimo sean 5 digitos la clave

  /* @length(5)
  readonly password: string | undefined; */
}

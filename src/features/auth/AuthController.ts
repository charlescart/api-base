import { JsonController, Body, Post, UseBefore } from 'routing-controllers';
import { Authentication } from '../../middlewares/Authentication';
import User from './validators/User';

@JsonController('/auth')
@UseBefore(Authentication)
export default class AuthController {

  @Post('/login')
  login(@Body() user: { id: number, email: string }): { id: number, email: string } {
    return user;
  }

  @Post('/signup')
  post(@Body() user: User): User {
    // quiero validar los datos: name, surname, email, password
    // quiero usar algun orm typescript para guardar el user
    return user;
  }
}

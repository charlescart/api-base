import { JsonController, Body, Post, UseBefore } from 'routing-controllers';
import { Authentication } from '../../middlewares/Authentication';
import SignupUserDto from './validators/SignupUserDto';
import LoginUserDto from './validators/LoginUserDto';

@JsonController('/auth')
@UseBefore(Authentication)
export default class AuthController {

  @Post('/login')
  login(@Body() user: LoginUserDto): LoginUserDto {
    return user;
  }

  @Post('/signup')
  signup(@Body() user: SignupUserDto): SignupUserDto {
    // quiero validar los datos: name, surname, email, password
    // quiero usar algun orm typescript para guardar el user
    return user;
  }
}

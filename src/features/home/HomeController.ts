import { Get, JsonController } from 'routing-controllers';

@JsonController()
export default class AuthController {

  @Get('/')
  home(): string {
    return 'Api is running...';
  }
}

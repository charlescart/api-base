import {JsonController, Param, Body, Get, Post, Put, Delete} from 'routing-controllers';

@JsonController('/ping')
export default class PingController {
  @Get('/')
  getAll() {
    return 'GET PING';
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return id;
  }

  @Post('/')
  post(@Body() user: any) {
    return 'POST PING';
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() user: any) {
    return 'PUT PING';
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return 'DELETE PING';
  }
}

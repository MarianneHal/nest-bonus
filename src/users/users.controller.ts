import {
  Controller,
  Delete,
  Get,
  Post,
  Patch,
  Body,
  Req,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUsersList(
    @Req() req: any,
    @Body() body: CreateUserDto,
    @Res() res: any,
  ) {}

  @Post()
  async createUser(
    @Req() req: any,
    @Body() body: CreateUserDto,
    @Res() res: any,
  ) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.userService.createUser(body));
  }

  @ApiParam({ name: 'id', required: true })
  @Delete('/:id')
  async deleteUser(
    @Req() req: any,
    @Res() res: any,
    @Param('userId') userId: any,
  ) {}

  @ApiParam({ name: 'id', required: true })
  @Patch('/:id')
  async updateUser(
    @Req() req: any,
    @Body() body: CreateUserDto,
    @Res() res: any,
    @Param('userId') userId: any,
  ) {}
}

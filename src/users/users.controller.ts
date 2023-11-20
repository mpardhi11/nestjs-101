import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get("interns")
  findAllInterns() {
    return [];
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() user: object) {
    return user;
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() user: object) {
    return { id, ...user };
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.usersService.deleteUser(+id);
  }
}

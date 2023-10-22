import { Controller, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController{

      constructor(private userService:UserService){
      }

      @Get()
      getUsers(){
            return this.userService.get();
      }

      @Post()
      store(@Req() req: Request){
            return req.body;
      }

      @Get('/:userid')
      getUser(@Param() params:{userid:number}){
            return params;
      }

      @Patch()
      update(@Req() req:Request){
            return req.body;
      }
}
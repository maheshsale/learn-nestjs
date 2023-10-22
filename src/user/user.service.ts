import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{
      get(){
            return 'I am an user';
      }
}
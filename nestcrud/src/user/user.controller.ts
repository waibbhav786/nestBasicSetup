import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto";
import { LoginDto } from "./dto/login.dto";


@Controller('user')
export class UserController {
constructor(private UserService: UserService){

}

@Post("/register")
  async register(@Body() createUserDto: CreateUserDTO):Promise<any> {
   return this.UserService.register(createUserDto)
}  

@Post("/login")
async login(@Body() loginDto:LoginDto):Promise<any>{
   return this.UserService.login(loginDto)
}

}

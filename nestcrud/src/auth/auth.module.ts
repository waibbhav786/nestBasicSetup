import { Global, Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserService } from "src/user/user.service";
import { user } from "src/user/user.module";
import { UserSchema } from "src/schemas/user.scema";
import { MongooseModule } from "@nestjs/mongoose";

@Global()
@Module({
    imports:[MongooseModule.forFeature([{ name: 'USER_MODEL', schema: UserSchema }]),user],
    controllers:[AuthController],
    providers:[AuthService , UserService],
})

export class AuthModule{

}
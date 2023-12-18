import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {
    ExtractJwt,
    Strategy,
}from "passport-jwt"
import { UserService } from "src/user/user.service";

@Injectable({})
export class AuthService extends PassportStrategy (
    Strategy,
    'jwt'
) {
constructor(private UserService :UserService ){
    super({
        jwtFromRequest: ExtractJwt.fromHeader('token'),
        secretOrKey: "secret",
    });
}
    
async validate(payload: any) {
    // console.log(payload);
    const user = await this.UserService.authentication(payload.userData[0]._id);
    // console.log(user);
    return user||null;
}

}


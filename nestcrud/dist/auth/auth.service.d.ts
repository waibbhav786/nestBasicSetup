import { UserService } from "src/user/user.service";
declare const AuthService_base: new (...args: any[]) => any;
export declare class AuthService extends AuthService_base {
    private UserService;
    constructor(UserService: UserService);
    validate(payload: any): Promise<any>;
}
export {};

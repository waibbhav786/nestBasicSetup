import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto";
import { LoginDto } from "./dto/login.dto";
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    register(createUserDto: CreateUserDTO): Promise<any>;
    login(loginDto: LoginDto): Promise<any>;
}

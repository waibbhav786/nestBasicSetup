/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { UserDocument } from "../schemas/user.scema";
import { Model } from 'mongoose';
import { CreateUserDTO } from "./dto";
import { LoginDto } from "./dto/login.dto";
export declare class UserService {
    private UserModel;
    constructor(UserModel: Model<UserDocument>);
    login(loginDto: LoginDto): Promise<"wrong password" | "email not found" | {
        success: boolean;
        message: string;
        user: any;
    }>;
    register(createUserDto: CreateUserDTO): Promise<import("mongoose").Document<unknown, {}, UserDocument> & import("../schemas/user.scema").User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    authentication(id: any): Promise<any>;
}

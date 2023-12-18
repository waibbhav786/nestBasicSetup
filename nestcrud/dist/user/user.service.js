"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const login_dto_1 = require("./dto/login.dto");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
let UserService = class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    async login(loginDto) {
        const data = loginDto;
        const userEmail = data.email.toLowerCase();
        const userData = await this.UserModel.aggregate([
            {
                $match: {
                    email: userEmail
                }
            },
            {
                $project: {
                    "name": "$name",
                    "email": "$email",
                    "phone": "$phone",
                    "isEmailVerified": "$isEmailVerified",
                    "createdAt": "$createdAt",
                    "updatedAt": "$updatedAt",
                    "password": "$password"
                },
            }
        ]);
        if (userData) {
            const match = await bcrypt.compare(data?.password, userData[0]?.password);
            if (match) {
                const token = await jwt.sign({ userData }, "secret", { expiresIn: "90d" });
                userData[0].token = token;
                return {
                    "success": true,
                    "message": "Login successful",
                    "user": userData[0]
                };
            }
            else {
                return "wrong password";
            }
        }
        else {
            return "email not found";
        }
    }
    async register(createUserDto) {
        const salt = await bcrypt.genSalt();
        createUserDto.password = await bcrypt.hash(createUserDto.password, salt);
        try {
            const createdUser = await this.UserModel.create(createUserDto);
            return createdUser;
        }
        catch (error) {
            if (error.name === "ValidationError") {
                throw new common_1.BadRequestException(error.errors);
            }
            throw new common_1.ServiceUnavailableException();
        }
    }
    async authentication(id) {
        try {
            let user = await this.UserModel.aggregate([
                { $match: { _id: new mongoose.Types.ObjectId(id), isDeleted: false } },
            ]);
            if (user && user.length)
                return user[0];
            return null;
        }
        catch (error) {
            return error;
        }
    }
};
exports.UserService = UserService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "login", null);
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)({}),
    __param(0, (0, mongoose_1.InjectModel)('USER_MODEL')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map
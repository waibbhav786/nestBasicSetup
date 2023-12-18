"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const user_scema_1 = require("../schemas/user.scema");
let user = class user {
};
exports.user = user;
exports.user = user = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'USER_MODEL', schema: user_scema_1.UserSchema }]),
            mongoose_1.MongooseModule.forRoot("mongodb+srv://singhwaibbhav:00012389@cluster0.esrmjar.mongodb.net/")],
        providers: [user_service_1.UserService],
        controllers: [user_controller_1.UserController]
    })
], user);
//# sourceMappingURL=user.module.js.map
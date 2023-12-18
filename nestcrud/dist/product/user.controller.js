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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const passport_1 = require("@nestjs/passport");
let ProductController = class ProductController {
    constructor(ProductService) {
        this.ProductService = ProductService;
    }
    getProducts() {
        return this.ProductService.getProducts();
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)("getall"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getProducts", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=user.controller.js.map
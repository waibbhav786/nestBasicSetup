import { Module } from "@nestjs/common";
import { ProductController } from "./user.controller";
import { ProductService } from "./product.service";


@Module({
    controllers:[ProductController],
    providers:[ProductService]
})
export class ProductModule{


}
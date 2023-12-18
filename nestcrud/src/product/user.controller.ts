import { Controller, Get, UseGuards } from "@nestjs/common";
import { ProductService } from "./product.service";
import { AuthGuard } from "@nestjs/passport";


@UseGuards(AuthGuard('jwt')) // we can do this to guard the whole controller 
@Controller('product')
export class ProductController{

constructor(private ProductService: ProductService ){

}    

// Or we can do this to guard the perticular route 
// @UseGuards(AuthGuard('jwt')) 
@Get("getall")
getProducts(){
return this.ProductService.getProducts()
}

}
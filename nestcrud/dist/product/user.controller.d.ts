import { ProductService } from "./product.service";
export declare class ProductController {
    private ProductService;
    constructor(ProductService: ProductService);
    getProducts(): string;
}

import Creator from "./Creator";
import Product from "./Product";
import FirstProductType from "./FirstProductType";

export default class TheFirstProductCreator extends Creator{
    private readonly brand: string;

    constructor(brand: string) {
        super();
        this.brand=brand
    }

    factoryFunction(): Product {
        return new FirstProductType(this.brand)
    }
}
import Product1 from "./Product1";
import Builder from "./Builder";

export default class TheFirstBuilderType implements Builder<Product1> {
    public product: Product1;

    end(): Product1 {
        const result=this.product
        this.product=new Product1()
        return result;
    }

    constructor() {
        this.product = new Product1();
    }

    public producePartA(): Builder<Product1> {
        this.product.parts.push('PartA1');
        return this;
    }

    public producePartB(): Builder<Product1> {
        this.product.parts.push('PartB1');
        return this;
    }

    public producePartC(): Builder<Product1> {
        this.product.parts.push('PartC1');
        return this;
    }

}

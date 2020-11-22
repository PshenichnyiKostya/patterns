import Product from "./Product";

export default class FirstProductType implements Product{

    public brand: string;

    constructor(brand: string) {
        this.brand =brand
    }

    defaultFunction(): string {
        return `It's first type of product, ${this.brand}`;
    }

}
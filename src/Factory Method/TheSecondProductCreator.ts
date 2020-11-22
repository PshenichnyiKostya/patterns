import Creator from "./Creator";
import Product from "./Product";
import SecondProductType from "./SecondProductType";

export default class TheSecondProductCreator extends Creator{

    private _brand: string;

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }

    constructor(brand: string) {
        super();
        this._brand=brand
    }

    factoryFunction(): Product {
        return new SecondProductType(this._brand)
    }
}
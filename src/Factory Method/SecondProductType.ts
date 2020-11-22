import Product from "./Product";

export default class SecondProductType implements Product{
    get brand(): string {
        return this._brand;
    }

    constructor(brand: string) {
        this._brand = brand;
    }

    set brand(value: string) {
        this._brand = value;
    }

    private _brand: string;

    defaultFunction(): string {
        return `May the force with you, ${this._brand}`;
    }
}
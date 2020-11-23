import Builder from "./Builder";
import Product1 from "./Product1";
import BadAndGoodDirector from "./BadAndGoodDirector";

export default class Director<T extends Product1> implements BadAndGoodDirector<Product1> {
    private _builder: Builder<T>;

    set builder(value: Builder<T>) {
        this._builder = value;
    }

    constructor(builder: Builder<T>) {
        this._builder = builder;
    }

    buildFullFeaturedProduct(): Product1 {
        return this._builder
            .producePartA()
            .end()
    }

    buildMinimalViableProduct(): Product1 {
        return this._builder
            .producePartA()
            .producePartB()
            .producePartC()
            .end()
    }

}
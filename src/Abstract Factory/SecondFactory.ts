import AbstractFactory from "./AbstractFactory";
import AbstractProductA from "./AbstractProductA";
import AbstractProductB from "./AbstractProductB";
import ProductA2 from "./ProductA2";
import ProductB2 from "./ProductB2";

export default class SecondFactory implements AbstractFactory {

    createProductA(): AbstractProductA {
        return new ProductA2();
    }

    createProductB(): AbstractProductB {
        return new ProductB2()
    }
}
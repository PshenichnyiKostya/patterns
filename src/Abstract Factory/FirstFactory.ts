import AbstractFactory from "./AbstractFactory";
import AbstractProductA from "./AbstractProductA";
import AbstractProductB from "./AbstractProductB";
import ProductA1 from "./ProductA1";
import ProductB1 from "./ProductB1";

export default class FirstFactory implements AbstractFactory {

    createProductA(): AbstractProductA {
        return new ProductA1();
    }

    createProductB(): AbstractProductB {
        return new ProductB1()
    }
}
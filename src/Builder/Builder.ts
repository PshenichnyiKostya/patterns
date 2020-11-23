import Product1 from "./Product1";
import DefaultBuilder from "./DefaultBuilder";

export default interface Builder<T extends Product1> extends DefaultBuilder<T>{
    producePartA(): Builder<T>;
    producePartB(): Builder<T>;
    producePartC(): Builder<T>;
}

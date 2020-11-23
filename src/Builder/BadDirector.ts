import Product1 from "./Product1";

export default interface BadDirector<T extends Product1>{
    buildMinimalViableProduct(): T;
}
import Product1 from "./Product1";

export default interface GoodDirector<T extends Product1>{
    buildFullFeaturedProduct(): T;
}
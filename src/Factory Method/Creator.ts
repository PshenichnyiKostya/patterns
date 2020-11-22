import Product from "./Product";

export default abstract class Creator{
    public abstract factoryFunction(): Product;
}
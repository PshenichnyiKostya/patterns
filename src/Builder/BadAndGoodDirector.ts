import BadDirector from "./BadDirector";
import GoodDirector from "./GoodDirector";
import Product1 from "./Product1";

export default interface BadAndGoodDirector<T extends Product1> extends BadDirector<T>, GoodDirector<T> {

}
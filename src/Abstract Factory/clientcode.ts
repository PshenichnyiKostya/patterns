import FirstFactory from "./FirstFactory";
import SecondFactory from "./SecondFactory";

const factory1=new FirstFactory()
const factory2=new SecondFactory()
const prodA1=factory1.createProductA()
const prodB1=factory1.createProductB()
const prodA2=factory2.createProductA()
const prodB2=factory2.createProductB()
console.log(prodA1.usefulFunctionA())
console.log(prodB1.usefulFunctionB())
console.log(prodA2.usefulFunctionA())
console.log(prodB2.anotherFunctionForB(prodA2))
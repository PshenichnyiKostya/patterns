import TheSecondProductCreator from "./TheSecondProductCreator";
import TheFirstProductCreator from "./TheFirstProductCreator";

const firstProductTypeFactory = new TheFirstProductCreator('Mazda');
const product1 = firstProductTypeFactory.factoryFunction()
const product2 = firstProductTypeFactory.factoryFunction()
console.log(product1.defaultFunction())
console.log(product2.defaultFunction())
/////////////////////////////////////////////////////////////////////////////
const secondProductTypeFactory = new TheSecondProductCreator('Mercedes')
const product3 = secondProductTypeFactory.factoryFunction()
console.log(product3.defaultFunction())


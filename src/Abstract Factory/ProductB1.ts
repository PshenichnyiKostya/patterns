import AbstractProductB from "./AbstractProductB";
import AbstractProductA from "./AbstractProductA";

export default class ProductB1 implements AbstractProductB{
    anotherFunctionForB(collaborator: AbstractProductA): string {
        const resCollaborator=collaborator.usefulFunctionA();
        return resCollaborator+' addition property for B';
    }
    usefulFunctionB(): string {
        return "It's type of product B. Product1";
    }

}
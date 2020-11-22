import AbstractProductB from "./AbstractProductB";
import AbstractProductA from "./AbstractProductA";

export default class ProductB2 implements AbstractProductB{
    usefulFunctionB(): string {
        return "It's type of product B. Product2";
    }

    anotherFunctionForB(collaborator: AbstractProductA): string {
        const resCollaborator=collaborator.usefulFunctionA();
        return resCollaborator+' addition property for B';
    }
    
}
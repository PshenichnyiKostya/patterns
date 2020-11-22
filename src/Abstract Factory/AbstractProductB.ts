import AbstractProductA from "./AbstractProductA";

export default interface AbstractProductB {
    usefulFunctionB(): string;
    anotherFunctionForB(collaborator: AbstractProductA): string
}
import { AnimalInterface } from "./animalInterface";

export class Animal implements AnimalInterface {
    name: string;
    constructor(name:string) {
        this.name = name;
    }

    move(distance: number) {
        console.log("the animal just move", distance, "kms");
        
    }

    eat(nutritionalValue:number) {
        console.log("the animal just ate", nutritionalValue);
        
    }
}
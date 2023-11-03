import { Bird } from "./bird";
import { Cat } from "./cat";

const cat1 = new Cat("Garfield", "lasagna");
cat1.move(10);

const bird = new Bird("Birdie", 12)
bird.fly(12);

cat1.eat(20);
bird.eat(10);
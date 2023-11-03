"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log("the animal just move", distance, "kms");
    };
    Animal.prototype.eat = function (nutritionalValue) {
        console.log("the animal just ate", nutritionalValue);
    };
    return Animal;
}());
exports.Animal = Animal;

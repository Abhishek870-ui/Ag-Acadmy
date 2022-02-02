/*Eg03
    create two classes
        @class_one
        @class_two
    each class contain following function
        @fun_one
    class_one related fun_one return class_two object
    class_two related fun_one return "Welcome...!"
*/
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        return new class_two();
    };
    return class_one;
}());
var class_two = /** @class */ (function () {
    function class_two() {
    }
    class_two.prototype.fun_one = function () {
        return "Welcome...!";
    };
    return class_two;
}());
document.write(new class_one().fun_one().fun_one() + "");

/*Eg02
    Create a class
        @class_one
    initialyse following variables
    by using parameterised constructor
        @sub_one
        @sub_two
        @sub_three
    create a function
        @my_fun
    my_fun will return above variables
*/
var class_one = /** @class */ (function () {
    function class_one(arg1, arg2, arg3) {
        this.sub_one = arg1;
        this.sub_two = arg2;
        this.sub_three = arg3;
    }
    class_one.prototype.my_fun = function () {
        return this.sub_one + " " + this.sub_two + " " + this.sub_three;
    };
    return class_one;
}());
var obj1 = new class_one("Share_market", "Mutual_funds", "Gold_bonds");
document.write(obj1.my_fun());
var obj2 = new class_one("AWS", "Azure", "dJango");
document.write(obj2.my_fun());

/*
Eg01
    Create a class
        @class_one
    declare following variables
        @sub_one
        @sub_two
        @sub_three
    initialyse these variables by using constructor
    create functions
        @get_Subone
        @get_Subtwo
        @get_Subthree
    above functions will return
    sub_one, sub_two and sub_three respectively
*/
var class_one = /** @class */ (function () {
    function class_one() {
        this.sub_one = "English";
        this.sub_two = "Maths";
        this.sub_three = "Science";
    }
    class_one.prototype.get_Subone = function () {
        return this.sub_one;
    };
    class_one.prototype.get_Subtwo = function () {
        return this.sub_two;
    };
    class_one.prototype.get_Subthree = function () {
        return this.sub_three;
    };
    return class_one;
}());
var obj = new class_one();
document.write(obj.get_Subone() + "<br>");
document.write(obj.get_Subtwo() + "<br>");
document.write(obj.get_Subthree() + "<br>");

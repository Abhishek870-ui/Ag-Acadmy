/*Eg05
    Create follwoing class
        @class_one
    create function in class_one
        @my_fun
    my_fun return JSON object
    JSON key is
        @wish
    JSON value is anonymous function definition
    anonymous function return "Have a Nice day ....!"

*/
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.my_fun = function () {
        return {
            wish: function () {
                return "Have a nice day...!";
            }
        };
    };
    return class_one;
}());
document.write("" + new class_one().my_fun().wish());

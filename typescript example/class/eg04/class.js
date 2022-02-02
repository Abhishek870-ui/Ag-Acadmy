/*Eg04
    create class
        @class_one
    create function
        @my_fun
    my_fun return JSON object
    JSON key is
        @wish
    JSON value is named function definition
        @fun_one
    fun_one return "Good Morning...!"
*/
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.my_fun = function () {
        return {
            wish: fun_one
        };
    };
    return class_one;
}());
function fun_one() {
    return "Good Morning...!";
}
document.write("" + new class_one().my_fun().wish());

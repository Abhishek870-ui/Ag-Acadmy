/*Eg05
    Named function return anonymous function
*/
var fun_one = function () {
    return function (arg) {
        return arg;
    };
};
document.write(fun_one()("Earbuds") + "<br>");

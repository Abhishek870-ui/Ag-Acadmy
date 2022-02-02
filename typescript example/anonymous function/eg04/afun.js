/*Eg04
    pass three anonymous function definitions to another anonymous function

    */
var fun_one = function (arg1, arg2, arg3) {
    return arg1() + "<>" + arg2() + "<>" + arg3();
};
document.write(fun_one(function () {
    return 'Car';
}, function () {
    return 'Laptop';
}, function () {
    return 'Mobile';
}) + "<br>");

/*Eg 04
    Create anonymous function
        @fun_one
    anonymous function return JSON object
    key is
        @wish
    value is anonymous funtion definition
*/
var fun_one = function () {
    return {
        wish: function () {
            return 'IOT';
        }
    };
};
document.write(fun_one().wish() + "<br>");

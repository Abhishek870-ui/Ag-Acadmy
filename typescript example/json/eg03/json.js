/*Eg03
    Create named function
        @fun_one
    fun_one return JSON obj
    JSON key is
        @wish
    JSON value is @anonymosus function definition
*/
function fun_one() {
    return {
        wish: function () {
            return 'Cloud';
        }
    };
}
document.write(fun_one().wish() + "<br>");

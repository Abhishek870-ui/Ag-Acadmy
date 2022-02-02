/*Eg03
    Create named function
        @fun_one
    fun_one return JSON obj
    JSON key is
        @wish
    JSON value is @anonymosus function definition
*/
function fun_one() : any
{
    return {
        wish : () : string => {
            return 'Cloud'
        }
    }
}
document.write(fun_one().wish()+"<br>")

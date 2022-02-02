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
class class_one
{
    public my_fun() : any
    {
        return {
            wish : fun_one
        }
    }
}

function fun_one() : string{
    return "Good Morning...!"
}

document.write( ""+new class_one().my_fun().wish())


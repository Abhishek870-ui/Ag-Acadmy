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

class class_one
{
    public my_fun() : any
    {
        return {
            wish : () : string =>{
                return "Have a nice day...!"
            }
        }
    }
}


document.write( ""+new class_one().my_fun().wish())


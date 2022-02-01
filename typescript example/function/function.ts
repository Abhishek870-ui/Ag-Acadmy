/*eg01
create a function
@fun_one
fun_one returns 'Welcome...!'

*/

function fun_one() : string{
    return 'Welcome ...!'
}
document.write(fun_one + "<br>")
document.write(fun_one() + "<br>")


/*eg02
create a function with three arguments
@fun_two
@arg1 : string
@arg2 : string
@arg3 : string
return type is string

*/

function fun_two(arg1 : string,arg2 : string,arg3 : string,) : string{
    return arg1 + "-_-"+arg2 + "-_-"+arg3
}
document.write(fun_two('Angular',"Node Js","react js" + '<br>'))
document.write(fun_two('mongobd','mysql','mssql') + "<br>")

/*eg05
create four function
@fun_three
@fun_four
@fun_five
@fun_six
fun_four return 'Angular'
fun_five return 'nodejs
fun_six 'mongo db'
pass fun_four/five,six function definition as argument to fun_three


*/

function fun_three(arg1 : any, arg2 : any, arg3 : any ) : any
{
    return arg1 + "-_-"+arg2 + "-_-"+arg3

}

function fun_four() : string
{
    return "Angular"
}


function fun_five() : string
{
    return "Node Js"
}


function fun_six() : string
{
    return "Mongo Db"
}

document.write(fun_three(fun_four,fun_five,fun_six) + "<br>")  // function definition call
document.write(fun_three(fun_four(),fun_five(),fun_six()) + "<br>")  // function call complete

/*eg06
create following function with two arguments
@fun_seven
@arg1 : string
@arg2 : Array<any>
pass array of fun_eight,fun_nine definition
as second argument to fun_seven

*/

function fun_seven(arg1:string,arg2:Array<any>,arg3:any,arg4:any) : any
{

        return arg1 + "-_-"+arg2 + "-_-"+arg3 + "-_-"+arg4
}

function fun_eight() : string
{
    return "Node Js"
}


function fun_nine() : string
{
    return "Mongo Db"
}
document.write(fun_seven("ABC",[10,20,'ABC'],fun_eight,fun_nine)+ "<br>")
document.write(fun_seven("ABC",[10,20,'ABC'],fun_eight(),fun_nine())+ "<br>")




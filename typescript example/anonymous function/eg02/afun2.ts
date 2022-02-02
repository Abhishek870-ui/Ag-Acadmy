/*Eg02
    Create anonymous function with following
        @fun_one
    anonymous function take three arguments
        @arg1 : string
        @arg2 : string
        @arg3 : string
    anonymous funtion return string
    */
var fun_one = (arg1 : string, arg2 : string, arg3 : string) : string =>
{
    return arg1 + "---" + arg2 + "---" +arg3
}
document.write(fun_one("India","Japan","Germany")+"<br>")

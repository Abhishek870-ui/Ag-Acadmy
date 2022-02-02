/*Eg03
    one anonymous function return another anonymous function
    inner anonymous function return "Welcome..."
*/
var fun_one = () : any =>{
    return () : string => {
        return "Welcome....!"
    }
}
document.write(fun_one+"<br>")
document.write(fun_one()+"<br>")
document.write(fun_one()()+"<br>")

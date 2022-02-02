/*Eg05
    Named function return anonymous function
*/
let fun_one = () : any =>{
    return (arg:string) : string =>{
        return arg
    }
}
document.write(fun_one()("Earbuds")+"<br>")

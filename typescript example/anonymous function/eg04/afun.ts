/*Eg04
    pass three anonymous function definitions to another anonymous function

    */
var fun_one = (arg1 : any, arg2 : any, arg3 : any) : any => {
    return arg1() + "<>" + arg2() + "<>" + arg3()
}

document.write(fun_one(
    () : any =>{
        return 'Car'
    },
    () : any =>{
        return 'Laptop'
    },
    () : any =>{
        return 'Mobile'
    }
)+"<br>")

/*Eg02
    Create a class
        @class_one
    initialyse following variables
    by using parameterised constructor
        @sub_one
        @sub_two
        @sub_three
    create a function
        @my_fun
    my_fun will return above variables
*/
class class_one
{
    private sub_one : string
    private sub_two : string
    private sub_three : string
    constructor(arg1 : string, arg2 : string, arg3 : string)
    {
        this.sub_one = arg1
        this.sub_two = arg2
        this.sub_three = arg3
    }
    public my_fun() : string
    {
        return this.sub_one + " " + this.sub_two + " " + this.sub_three 
    }
}

var obj1 = new class_one("Share_market","Mutual_funds","Gold_bonds")
document.write(obj1.my_fun())

var obj2 = new class_one("AWS","Azure","dJango")
document.write(obj2.my_fun())


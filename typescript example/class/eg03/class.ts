/*Eg03
    create two classes
        @class_one
        @class_two
    each class contain following function
        @fun_one
    class_one related fun_one return class_two object
    class_two related fun_one return "Welcome...!"
*/
class class_one
{
    public fun_one() : any
    {
        return new class_two()
    }
}

class class_two
{
    public fun_one() : string
    {
        return "Welcome...!"
    }
}

document.write(new class_one().fun_one().fun_one()+"")

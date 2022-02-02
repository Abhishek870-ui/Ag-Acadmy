/*
Eg01
    Create a class
        @class_one
    declare following variables
        @sub_one
        @sub_two
        @sub_three
    initialyse these variables by using constructor
    create functions
        @get_Subone
        @get_Subtwo
        @get_Subthree
    above functions will return 
    sub_one, sub_two and sub_three respectively
*/
class class_one
{
    private sub_one : string
    private sub_two : string
    private sub_three : string
    constructor()
    {
        this.sub_one = "English"
        this.sub_two = "Maths"
        this.sub_three = "Science"
    }

    public get_Subone() : string
    {
        return this.sub_one
    }

    public get_Subtwo() :string
    {
        return this.sub_two
    }

    public get_Subthree() : string
    {
        return this.sub_three
    }
}
var obj = new class_one()
document.write(obj.get_Subone()+"<br>")
document.write(obj.get_Subtwo()+"<br>")
document.write(obj.get_Subthree()+"<br>")

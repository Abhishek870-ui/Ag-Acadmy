/*
Eg01
    Create JSON object using following variables
        @data
    JSON keys are
        @sub_one
        @sub_two
        @sub_three
    JSON values are
        @Angular
        @NodeJS
        @MongoDB
*/
var data = {
    'sub_one' : 'Angular',
    sub_two : 'NodeJS',
    "sub_three" : 'MongoDB'
}

document.write(data.sub_one+" "+data.sub_two+" "+data.sub_three +"<br>")

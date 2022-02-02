/*Eg05
    Create JSON object using following variables
        @data
    key is 
        @products
    value is array of 5 JSON objects
    JSON keys are
        @p_id
        @p_name
        @p_cost
*/
var data = {
    products : [
        {p_id : 111, p_name : 'P_one', p_cost : 10000},
        {p_id : 222, p_name : 'P_two', p_cost : 20000},
        {p_id : 333, p_name : 'P_three', p_cost : 30000},
        {p_id : 444, p_name : 'P_four', p_cost : 40000},
        {p_id : 555, p_name : 'P_five', p_cost : 50000}
    ]
}

document.write(data.products[3].p_cost+" ")

for(let i = 0; i < data.products.length; i++)
{
    let obj = data.products[i]
    document.write(obj.p_id+" ")
    document.write(obj.p_name+" ")
    document.write(obj.p_cost+"<br> ")
}

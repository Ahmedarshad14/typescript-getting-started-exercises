/* Sandwiches: Write a function that accepts an array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function 
call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/

function orderSandwich (items: string[]):void {
    console.log("Your sandwich with the following items is being prepared.")
    for (let i =0; i < items.length; i++) {
        
        if (i === items.length -1) {
            console.log("and " + items[i])
        }else {
            console.log(items[i])
        }
    }
    console.log("Enjoy!")
}

const sandwich1:string[] = ["Chicken", "Olives", "Tomatoes", "Onions"]
const sandwich2:string[] = ["Chicken", "Cheese", "Mayo"]
const sandwich3:string[] = ["Beef", "BBQ Sauce", "Olives", "Tomatoes", "Onions"]

orderSandwich(sandwich3)
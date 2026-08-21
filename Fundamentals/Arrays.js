// Array is an object type designed for storing data collections
// Key characteristics
//1.Element
//2.Ordered
//3.Zero Indexed: For the first element.
//4.Dynamic Size: Size of an array can be extended by adding elements and shrink by
// removing elements.
//5. Heterogenous: array can store various type of data like numbers,string,objects and other arrays.

///-----Lets construct an array------///
const myCars = ["Toyota Supra", " Honda Civic", " Nissan GTR", " Ferrari", " McLauren"];


//---changing Elements inside the arrays----//
myCars[0] = "Toyota Harrior";
myCars[3] = "buggate";
// console.log(myCars[3]);


///-----Converting an array to a string----///

console.log(myCars.toString());

///-----Arrays are Objects-------///

console.log("Array is an",typeof myCars);

// Length of an array//

console.log("Array Length:",myCars.length);

///----Accessing the last elements Using length----///

console.log("Last Car:",myCars[myCars.length-1]);

///-------Using Loop-------////

let text = "<ul>";
for(let i = 0; i < myCars.length; i++)
{
      text += "<li>" + myCars[i] + "</li>";
}
text += "</ul>";
let headline = "<h1>My Cars List</h1>";
document.getElementById("headLine").innerHTML = headline;
document.getElementById("arrays").innerHTML = text;

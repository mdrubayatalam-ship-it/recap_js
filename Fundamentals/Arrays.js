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

////--------------NESTED ARRAY and OBJECT--------------///

let x = " ";
const myObj = {
    name: "Rubayat",
    id: 138,
    Grades: [{Courses:"Computer Architecture", Result: ["Letter: A+","GPA: 4.00"]},
    {Courses:"Electromagnetic", Result:["Letter: B+","GPA: 3.25"]},
    {Courses:"Signal and Linear System", Result:["Letter: B","GPA: 3.00"]},
    {Courses:"Power System-I", Result:["Letter: A","GPA: 3.50"]},
    {Courses:"Microcontroller and Microprocessor", Result:["Letter: A+","GPA: 4.00"]}
    ]
}

for(let i in myObj.Grades){
    x += "<h2>"+ myObj.Grades[i].Courses +"</h2>";
     for (let j in myObj.Grades[i].Result) {
        x += myObj.Grades[i].Result[j] + "<br>";
     }
}
document.getElementById("results").innerHTML = x;
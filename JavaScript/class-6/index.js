var age = +prompt("Enter your Age");  //+ sign convert the string into number
var isHavingCNIC = prompt("Do you have your CNIC?");
var isPakistani = prompt("Are you Pakistani??");

// AND Operator 
// true && true = true
// true && false = false
// false && true = false
// false && false = false


// OR Operator 
// true || true = true 
// true || false = true 
// false || true = true 
// false || false = false

//  > greater than
//  < less than
// >= greater than and equals to 
// <= less than and equals to 

console.log(age , isHavingCNIC , isPakistani)

if(age >= "18" && isHavingCNIC == 'yes' && isPakistani == 'yes'){ //testing multiple conditions
    alert("han bhai app vote dal skty ho.")
} else{
    alert("nhi bhai app vote nh dal skty ho.")
}

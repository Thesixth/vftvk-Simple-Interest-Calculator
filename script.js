function compute()
{
    p = document.getElementById("principal").value;
    
}


let principal = document.getElementById("principal").value;
// create a regular expression for validating principal input
const reg = new RegExp('-d')
function validatePrinciple(principal) {
  if (principal === 0 || reg ) {
    alert("Enter a positive number");
    return false;
  }
}
let rate = document.getElementById("rate").value;
let years = document.getElementById("years").value;
let interest = principal * years * rate /100;
let year = new Date().getFullYear()+parseInt(years);
function updateRate() 
{
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
let result = document.getElementById("result").innerText=principal,rate,interest,year;
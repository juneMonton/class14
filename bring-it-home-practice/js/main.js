// *Variables*
// Create a variable and console log the value
let x=1
console.log (x)

// Create a variable, add 10 to it, and alert the value
let y=10;
alert(y+10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(num1,num2,num3,num4){
    alert (num1-num2-num3-num4)
}

sub(10,2,2,2)



// Create a function that divides one number by another and returns the remainder

function remainder(num1,num2){
    return (num1%num2)
}

console.log(remainder(8,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumanji(num1,num2){
    if(num1+num2>50){
        alert("jumanji")
    }
}
jumanji(25,30)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function Zebra(num1,num2,num3){
    const z=num1*num2*num3;
    if(z%3===0){
        alert ("ZEBRA")
}
}

Zebra(1,1,3)

//Only on Click
document.querySelector('#convert').addEventListener('click', convert)
//Convert the temperature from celsius to fahrenheit
function convert(){
    //Get the temperature in Celsius out of input
    let temp=document.querySelector('#celsius').value
    //convert the value
    temp=temp*9/5+32
    //display the fahrenheit temperature in the DOM
    document.querySelector('#displayTemp').innerText=temp
}



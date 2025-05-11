const input = require("prompt-sync")();


/**
let a = Number(input('Enter first number: '));
let b = input('Enter the second number ');
console.log(a);
try{
    a = Number(a);
    b = Number(b);
    console.log(a + b);
} catch (erro){
    console.error('erro: ', erro.message);}


 * 
 * function myFunction() {
  const message = document.getElementById("message");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x == "") throw "is Empty";
    if(isNaN(x)) throw "not a number";
    if(x > 10) throw "too high";
    if(x < 5) throw "too low";
  }
  catch(err) {
    message.innerHTML = "Input " + err;
  }
}
 */

function getUserInput(){
    let temp =Number(input('Enter the Celcius\'s temperature:  '));
    try{
        if(temp == "") throw "is Empty";
        if(isNaN(temp)) throw "not a number";
        return temp;
    } catch(err) {
        console.log('Erro: Input', err)
        return false;
    }
}

let a = getUserInput();
if (a){
    console.log(a);    
} else {
    console.log(a);
}
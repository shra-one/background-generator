var without  =    require('lodash/without');
var array =[1,2,3,4,6]
console.log("Answer:", without(array, 2));


var body = document.querySelector('body');
var color1  =   document.querySelector('#color1');
var color2  =   document.querySelector('#color2');
var displayValue1     =   document.querySelector('#color1Value');
var displayValue2    =   document.querySelector('#color2Value');

function updateGradient(){
    body.style.background=`linear-gradient(to right, ${color1.value}, ${color2.value})`;
    displayValue1.textContent=color1.value;
    displayValue2.textContent=color2.value;

}

function generateRandomGradient(){
    color1.value ='#'+Math.floor(Math.random()*16777215).toString(16);;
    color2.value ='#'+Math.floor(Math.random()*16777215).toString(16);;
    updateGradient();
}
updateGradient();

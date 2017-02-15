var register = document.getElementById('register');
var num1 = 0;
var operator ='';

//Display Clear
function cls (){
	register.innerHTML = "";
}

//Nummer aan Display toevoegen
function click (parms){
    register.innerHTML += parms.target.innerHTML;
}
//Function Som uitrekenen
function plus(){
	num1 = parseFloat(document.getElementById('register').innerHTML);
	operator = '+';
	register.innerHTML = "";
}
function min(){
	num1 = parseFloat(document.getElementById('register').innerHTML);
	operator = '-';
	register.innerHTML = "";
}
function keer(){
	num1 = parseFloat(document.getElementById('register').innerHTML);
	operator = '*';
	register.innerHTML = "";
}
function deel(){
	num1 = parseFloat(document.getElementById('register').innerHTML);
	operator = '/';
	register.innerHTML = "";
}
//Function to calculate
function calculate() {
	var getalInDisplay = parseFloat(document.getElementById('register').innerHTML);
	if (operator == '+'){
		var uitkomst = num1 + getalInDisplay
	}
	if (operator == '-'){
		var uitkomst = num1 - getalInDisplay
	}
	if (operator == '/'){
		var uitkomst = num1 / getalInDisplay
	}
	if (operator == '*'){
		var uitkomst = num1 * getalInDisplay
	}
	document.getElementById('register').innerHTML = uitkomst;
}

//Nummers toevoegen aan Register
document.getElementById("btn1").addEventListener("click", click);
document.getElementById("btn2").addEventListener("click", click);
document.getElementById("btn3").addEventListener("click", click);
document.getElementById("btn4").addEventListener("click", click);
document.getElementById("btn5").addEventListener("click", click);
document.getElementById("btn6").addEventListener("click", click);
document.getElementById("btn7").addEventListener("click", click);
document.getElementById("btn8").addEventListener("click", click);
document.getElementById("btn9").addEventListener("click", click);
document.getElementById("btn0").addEventListener("click", click);
document.getElementById("btnd").addEventListener("click", click);

//Register leegmaken
document.getElementById("btnc").addEventListener("click", cls);

//Som uitrekenen
document.getElementById("plus").addEventListener("click", plus);
document.getElementById("min").addEventListener("click", min);
document.getElementById("keer").addEventListener("click", keer);
document.getElementById("deel").addEventListener("click", deel);
document.getElementById("calculate").addEventListener("click", calculate);
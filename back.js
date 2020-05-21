// var css=document.querySelector("h3");
var col=document.querySelector(".col");
var col1=document.querySelector(".col1");
var body=document.getElementById("grad");

function setgrad() {
	body.style.background = 
	linear-gradient(to right,  
	+ col.value ", "+ col1.value 
	);

}


col.addEventListener("input",setgrad);

col1.addEventListener("input",setgrad);
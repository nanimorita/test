/* Area circonferenza del cerchio */
function calcoloArea(){
	//r
	var r=document.forms.circonferenza.r.value;
	//calcolo
	var cerchio= Math.pow(r,2) * Math.PI;
	//mostro
document.getElementById("area").innerHTML="calcoloArea = "+ cerchio;	
}

function calcoloCirconferenza(){
	var r=document.forms.circonferenza.r.value; 
	var circ = r * 2 * Math.PI;
document.getElementById("misuraCirconferenza").innerHTML="calcoloCirconferenza = "+ circ;
}

function cancella(){
document.getElementById("misuraCirconferenza").innerHTML=" ";
document.getElementById("area").innerHTML=" ";
}

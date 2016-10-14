var x=4
if (x===4) {
	console.log("Sale el mensaje");
}

if ( prompt ("Cómo te sentis") === "Triste") {
	console.log("Vamos, arriba ese ánimo");
}

if ( prompt("Introduce el Número Clave") !=="3") {
	alert ("Introdujo un código erroneo, tenga cuidado");

} else {
	alert("Bienvenido al Sitio")
}

if ( prompt("Introduce tu Clave") ==="3"){

} else {
	alert("Tene cuidado")
}

if ( prompt("Introduce tu Clave") ==="3"){
	alert("Bienvenido")
} else {
	window.location = "http://www.google.com"
}
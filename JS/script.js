function modalBienvenida(){
	document.getElementById("modalBienvenida").style.display="block";
	document.getElementById("tituloEncabezado").style.animationPlayState="paused";
	document.getElementById("subtituloEncabezado").style.animationPlayState="paused";
	document.documentElement.style.overflow="hidden";
}

function cerrarMBB(){
	document.getElementById("modalBienvenida").style.display="none";
	document.getElementById("tituloEncabezado").style.animationPlayState="running";
	document.getElementById("subtituloEncabezado").style.animationPlayState="running";
	document.documentElement.style.overflow="auto";
}


function modalContacto(){
	document.getElementById("modalContacto").style.display="block";
	document.documentElement.style.overflow="hidden";
}


function cerrarMBC(){
	document.getElementById("modalContacto").style.display="none";
	document.documentElement.style.overflow="auto";
}

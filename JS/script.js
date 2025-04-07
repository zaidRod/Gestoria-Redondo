function modalBienvenida() {
    document.getElementById("modalBienvenida").style.display = "block";
    document.getElementById("tituloEncabezado").style.animationPlayState = "paused";
    document.getElementById("subtituloEncabezado").style.animationPlayState = "paused";
    document.documentElement.style.overflow = "hidden";
}

function cerrarMBB() {
    document.getElementById("modalBienvenida").style.display = "none";
    document.getElementById("tituloEncabezado").style.animationPlayState = "running";
    document.getElementById("subtituloEncabezado").style.animationPlayState = "running";
    document.documentElement.style.overflow = "auto";
}


// Codigo del slideShow automático

let bgCounter = 0;

function heroSlideShow() {

    //Listado de imagenes
    let listaImgBg = [
        "url('Media/InicioHero1.jpg')",
        "url('Media/InicioHero2.jpg')",
        "url('Media/InicioHero3.jpg')",
        "url('Media/InicioHero4.jpg')"
    ];

    //Aumenta el contador
    bgCounter++;

    //Revisa si ha llegado al final
    if (bgCounter == listaImgBg.length) {
        bgCounter = 0;
    }

    //Agrega la imagen
    document.getElementById("encabezado").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))," + listaImgBg[bgCounter];

}


function modalContacto() {
    document.getElementById("modalContacto").style.display = "block";
    document.documentElement.style.overflow = "hidden";

    let nombre = document.getElementById("campoNombre").value;
    let telefono = document.getElementById("campoTelefono").value;
    let correo = document.getElementById("campoCorreo").value;

    // Validación del fomulario
    (function validarFormulario() {
        if (!document.getElementById("campoNombre").checkValidity()) {
            mensaje = "Introduce un nombre valido."
            document.getElementById("mensajeContacto").innerHTML = mensaje;
        } else if (!document.getElementById("campoTelefono").checkValidity()) {
            mensaje = "Introduce un teléfono valido."
            document.getElementById("mensajeContacto").innerHTML = mensaje;
        } else if (!document.getElementById("campoCorreo").checkValidity()) {
            mensaje = "Introduce un correo valido."
            document.getElementById("mensajeContacto").innerHTML = mensaje;
        } else if (!document.getElementById("campoMensaje").checkValidity()) {
            mensaje = "Introduce un mensaje valido."
            document.getElementById("mensajeContacto").innerHTML = mensaje;
        } else {
            let mensaje = `Apreciad@ ${nombre}, hemos recibido tu solicitud. Por favor, revisa tu correo: ${correo} y tu telefono: ${telefono} ya que recibiras una confirmación.`;
            //Carga de la información al mensaje
            document.getElementById("mensajeContacto").innerHTML = mensaje;
        }
    })();
}


function cerrarMBC() {
    document.getElementById("modalContacto").style.display = "none";
    document.documentElement.style.overflow = "auto";
    document.getElementById("campoNombre").value = "";
    document.getElementById("campoTelefono").value = "";
    document.getElementById("campoCorreo").value = "";
    document.getElementById("campoMensaje").value = "";
}

// Función para el scroll
let posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function() { esconderMostrarmenu() };

function esconderMostrarmenu() {
    let postActual = document.documentElement.scrollTop;
    if (posPreviaScroll > postActual) {
        // Se está subiendo, se muestra el menú
        document.getElementById("barraNav").style.top = "0";

        // Cuando el menú es más pequeño
        if (postActual > 200) {
            document.getElementById("barraNav").style.height = "50px";
            document.getElementById("barraNav").style.fontSize = "1.75rem";
            document.getElementById("logo").style.height = "50px";
            document.getElementById("logo").style.paddingTop = "5px";

            //Posición normal
        } else {
            document.getElementById("barraNav").style.height = "107px";
            document.getElementById("barraNav").style.fontSize = "2.3rem";
            document.getElementById("logo").style.height = "100%";
            document.getElementById("logo").style.paddingTop = "0px";
        }

    } else {
        // Se está bajando, se oculta el menú
        if (postActual < 200) {
            document.getElementById("barraNav").style.height = "50px";
            document.getElementById("logo").style.height = "50px";
            document.getElementById("logo").style.paddingTop = "5px";
        } else {
            document.getElementById("barraNav").style.top = "-107px";
        }

    }
    posPreviaScroll = postActual;

}



// Creación del lightbox


let listaRutas = [];
let numeroImg = 0;

// function modalLightBoxG() {
//     document.getElementById("modalGaleria").style.display = "block";
//     document.documentElement.style.overflow = "hidden";
//     //Listado de la ruta de todas las imágenes
//     let listaImgGaleria = document.getElementsByClassName("imgGal");

//     for (let i = 0; i < listaImgGaleria.length; i++) {
//         listaRutas.push(listaImgGaleria[i].src);

//     }
//     document.getElementById("imageToShow").innerHTML = "<img class='imageLightbox'src='Media/Galeria1.jpg'>;"
// }



function readyLightBox() {

    //Listado de la ruta de todas las imágenes
    let listaImgGaleria = document.getElementsByClassName("imgGal");

    for (let i = 0; i < listaImgGaleria.length; i++) {
        listaRutas.push(listaImgGaleria[i].src);
    }

    for (let i = 0; i < listaImgGaleria.length; i++) {
        listaImgGaleria[i].addEventListener('click', openLightbox);
    }

    function openLightbox() {
        let rutaImagenClikada = event.currentTarget.src;
        numeroImg = listaRutas.indexOf(rutaImagenClikada);
        document.getElementById("imageToShow").innerHTML = "<img class='imageLightbox'src=" + listaRutas[numeroImg] + ">;"
        document.getElementById("modalGaleria").style.display = "block";
        document.documentElement.style.overflow = "hidden";
        //Llamado a la función de cierre.
        closeLightbox();
    }


    function closeLightbox() {
        window.addEventListener("click", function(event) {
            //Hago que al hacer click en la imagen del boton no se active el evento
            if (!event.target.matches(".imageLightbox") && !event.target.matches(".imgGal") && !event.target.matches(".img")) {
                document.getElementById("modalGaleria").style.display = "none";
                document.documentElement.style.overflow = "auto";
            }
        });
    }

}




//Función para cambiar la imagén hacia adelante.
function nextImgGal() {
    numeroImg++;

    if (numeroImg == listaRutas.length) {
        numeroImg = 0;
    }
    document.getElementById("imageToShow").innerHTML = "<img class='imageLightbox'src=" + listaRutas[numeroImg] + ">;"
}

//Function para cambiar hacia atras
function prevImgGal() {
    numeroImg--;
    if (numeroImg < 0) {
        numeroImg = listaRutas.length - 1;
    }
    document.getElementById("imageToShow").innerHTML = "<img class='imageLightbox'src=" + listaRutas[numeroImg] + ">;"
}

// Sección de pestañas
document.addEventListener('DOMContentLoaded', function() {


    //Creación del tooptip
    const target = document.getElementById('toolTip');
    //Crea un div para el tooltip
    const tooltip = document.createElement('div');
    //Le coloco el CSS
    tooltip.className = 'tooltip';
    //Lo agrego al body
    document.body.appendChild(tooltip);

    target.addEventListener('mouseenter', () => {
        //Tomo el texto a mostrar del atributo
        tooltip.textContent = target.getAttribute('mensaje');
        
        const rect = target.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - 35}px`;
        tooltip.style.opacity = '1';
    });

    target.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });





    // Obtener todos los botones
    const botones = document.querySelectorAll('.opciones button');

    // Definir el contenido de cada servicio
    const servicios = {
        extranjeria: [
            "Solicitud y renovación de NIE/TIE",
            "Residencia y nacionalidad española",
            "Permisos de trabajo y estudios",
            "Arraigo y reagrupación familiar"
        ],
        vehiculos: [
            "Obtención de permiso de circulación",
            "Cambio de titularidad de vehículo",
            "Transferencia y matriculación de vehículos",
            "Inscripción de vehículos importados"
        ],
        seguridad: [
            "Afiliación a la seguridad social",
            "Solicitud de pensiones",
            "Prestaciones por desempleo",
            "Asesoría en cotizaciones"
        ],
        asesoria: [
            "Asesoría legal para empresas",
            "Asesoría en impuestos",
            "Contratación de servicios legales",
            "Defensa jurídica laboral"
        ],
        laboral: [
            "Asesoría en contratos de trabajo",
            "Consultoría para despidos",
            "Consultoría en sindicatos",
            "Asesoría en salario y horas extras"
        ]
    };


    // Asignar evento de clic a cada botón
    botones.forEach(function(button) {
        button.addEventListener('click', function() {
            // Eliminar la clase "active" de todos los botones
            botones.forEach(function(btn) {
                btn.classList.remove('active');
            });
            // Añadir la clase "active" al botón clicado
            button.classList.add('active');

            // Obtener el servicio desde el atributo "data-servicio" del botón clicado
            const servicio = button.getAttribute('data-servicio');

            // Actualizar el contenido de la lista
            actualizarContenido(servicio);
        });
    });


    // Función para cambiar el contenido
    function actualizarContenido(servicio) {
        const listaServicios = document.getElementById("listaServicios");
        // Limpiar la lista actual
        listaServicios.innerHTML = "";

        // Oculta suavemente
        listaServicios.classList.add("oculto");

        // Espera a que termine el fade-out para cambiar el contenido
        setTimeout(() => {
            listaServicios.innerHTML = "";

            for (let i = 0; i < servicios[servicio].length; i++) {
                const li = document.createElement("li");
                li.textContent = servicios[servicio][i];
                listaServicios.appendChild(li);
            }

            // Vuelve a mostrar con transición
            listaServicios.classList.remove("oculto");
        }, 300);
    }

    //Muestro por defecto el valor de extranjería
    actualizarContenido("extranjeria");

});
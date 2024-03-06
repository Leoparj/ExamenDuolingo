const headerContainer = document.createElement('div');
headerContainer.classList.add('_encabezado', '_encabezado2');

const nav = document.createElement('nav');
nav.classList.add('_seccion1');

const logoLink = document.createElement('a');
logoLink.href = 'https://www.duolingo.com';
logoLink.setAttribute('aria-current', 'page');

const logoImage = document.createElement('img');
logoImage.src = 'imagenes/logo.svg';
logoImage.classList.add('_logo');
logoImage.alt = 'Descripción de la imagen';

logoLink.appendChild(logoImage);

const languageButton = document.createElement('button');
languageButton.classList.add('_menuidioma1', '_menuidioma2', '_menuidioma3', '_menuidioma4', '_menuidioma5');
languageButton.setAttribute('tabindex', '0');
languageButton.style.setProperty('--offset', '13px');

function abrirMenu() {
    document.getElementById("menu-idiomas").classList.toggle("abierto");
}

const languageTextContainer = document.createElement('span');
languageTextContainer.classList.add('_flecha');

const languageText = document.createTextNode('IDIOMA DE LA PÁGINA: ESPAÑOL');

languageTextContainer.appendChild(languageText);

const languageArrow = document.createElement('img');
languageArrow.src = 'Imagenes/Flecha.svg';
languageArrow.classList.add('_flecha', '_flecha2');
languageArrow.alt = '';

languageButton.appendChild(languageTextContainer);
languageButton.appendChild(languageArrow);

nav.appendChild(logoLink);
nav.appendChild(languageButton);

headerContainer.appendChild(nav);

document.body.appendChild(headerContainer);

// Crear un nuevo elemento de encabezado h1
var header = document.createElement('h1');
header.textContent = '¡La forma divertida, efectiva y gratis de aprender un idioma!';


// Crear un nuevo elemento de imagen
var img1 = document.createElement('img');
img1.src = 'imagenes/primero.png'; // Especifica la ruta de la imagen

// Añadir atributos opcionales, como el alt y el título
img1.alt = 'Imagen 1';
img1.title = 'Buho y amigos';
img1.className = "imagen1";
// Agregar la imagen al body del documento
document.body.appendChild(img1);
img1.style.maxWidth = '500px';


var contenedorBotones = document.getElementById("Botones");
var PrimerP = document.createElement("div");
document.body.appendChild(PrimerP);
PrimerP.className = "primerp";

var textElement = document.createElement("h1");
textElement.textContent = "¡La forma divertida, efectiva y gratis de aprender un idioma!"; // Reemplazar con el texto deseado
PrimerP.appendChild(textElement);



var StartButton = document.createElement("button");
StartButton.classList.add('StartButton1', 'StartButton2', 'StartButton3', 'StartButton4', 'StartButton5');
StartButton.innerHTML = "EMPIEZA AHORA";
PrimerP.appendChild(StartButton);
StartButton.style = "380px";
StartButton.href="https://www.duolingo.com/register";
StartButton.addEventListener("click", function() {
    window.location.href = this.href;
  });

var AccounttButton = document.createElement("button");
AccounttButton.classList.add('AccounttButton1', 'AccounttButton2', 'AccounttButton3', 'AccounttButton4', 'AccounttButton5');
AccounttButton.innerHTML = "YA TENGO UNA CUENTA";
PrimerP.appendChild(AccounttButton);
AccounttButton.style = "380px";
PrimerP.style.width = "480px";






document.addEventListener('DOMContentLoaded', function () {
    let menuIdiomas = document.getElementById('menu-superior');

    let btnmenu = [
        ['Inglés', 'https://www.duolingo.com/course/en/es/Aprender-inglés', 'imagenes/banderas/usa.png'],
        ['Francés', 'https://www.duolingo.com/course/fr/es/Aprender-franc%C3%A9s', 'imagenes/banderas/francia.png'],
        ['Alemán', 'https://www.duolingo.com/course/de/es/Aprender-alem%C3%A1n', 'imagenes/banderas/alemania.png'],
        ['Italiano', 'https://www.duolingo.com/course/it/es/Aprender-italiano', 'imagenes/banderas/italiano.png'],
        ['Portugués', 'https://www.duolingo.com/course/pt/es/Aprender-portugu%C3%A9s', 'imagenes/banderas/brasil.png'],
        ['Catalán', 'https://www.duolingo.com/course/ca/es/Aprender-catal%C3%A1n', 'imagenes/banderas/catalan.png'],
        ['Ruso', 'https://www.duolingo.com/course/ru/es/Aprender-ruso', 'imagenes/banderas/rusia.png'],
        ['Sueco', 'https://www.duolingo.com/course/sv/es/Aprender-sueco', 'imagenes/banderas/suecia.png']
    ];

    if (menuIdiomas) {
        menuIdiomas.style.display = 'flex';
        menuIdiomas.style.flexDirection = 'row'; // Establece la dirección del flexbox como horizontal
        for (let i = 0; i < btnmenu.length; i++) {
            let contenedorBoton = document.createElement('div');
            let imgBandera = document.createElement('img');
            imgBandera.setAttribute('src', btnmenu[i][2]);
            imgBandera.setAttribute('alt', btnmenu[i][0] + ' bandera');
            imgBandera.setAttribute('class', 'bandera');

            let crearBoton = document.createElement('a');
            crearBoton.setAttribute('href', btnmenu[i][1]);
            crearBoton.innerHTML = btnmenu[i][0];
            crearBoton.style.display = 'inline-block';
            crearBoton.style.marginRight = '10px';  // Agregar un margen entre los botones


            contenedorBoton.appendChild(imgBandera); // Agrega la imagen al contenedor
            contenedorBoton.appendChild(crearBoton); // Agrega el botón de idioma al contenedor
            menuIdiomas.appendChild(contenedorBoton); // Agrega el contenedor al menú
            imgBandera.setAttribute('src', btnmenu[i][2]);
            imgBandera.setAttribute('alt', btnmenu[i][0] + ' bandera');
            imgBandera.setAttribute('style', 'width: 36px; height: auto;'); // Establece el tamaño de la imagen

            menuIdiomas.appendChild(contenedorBoton);
        }
    }

});

document.addEventListener("DOMContentLoaded", function () {
    // Crear un nuevo elemento de párrafo con título
    var newParagraph = document.createElement("p");
    newParagraph.className="parrafo1";
    var newTitle = document.createElement("h2");
    var textNode = document.createTextNode("divertido, efectivo y gratis");
    newTitle.appendChild(textNode);
    var paragraphText = document.createTextNode("Aprender con Duolingo es divertido y los estudios demuestran que funciona. ¡En nuestras lecciones cortas ganarás puntos y habilitarás nuevas unidades al mismo tiempo que desarrollas tus habilidades de comunicación en la vida real!");
    newParagraph.appendChild(newTitle);
    newParagraph.appendChild(paragraphText);

    // Agregar el nuevo párrafo al contenedor en el HTML
    var container = document.getElementById("contenedor");
    container.appendChild(newParagraph);

    var imagen = document.createElement("img");
    imagen.className = "imagen2"
    imagen.src = "imagenes/segundo.png";
    container.appendChild(imagen);
    container.appendChild(newParagraph);
});


document.addEventListener("DOMContentLoaded", function () {
    // Crear un nuevo elemento de párrafo con título
    var newParagraph = document.createElement("p");
    newParagraph.className="parrafo2";
    var newTitle = document.createElement("h2");
    var textNode = document.createTextNode("respaldado por la ciencia");
    newTitle.appendChild(textNode);
    var paragraphText = document.createTextNode("Gracias a la combinación de métodos de enseñanza respaldados por la ciencia y un contenido entretenido, creamos cursos que enseñan de forma eficiente a leer, escribir, entender y hablar en otros idiomas.");
    newParagraph.appendChild(newTitle);
    newParagraph.appendChild(paragraphText);

    // Agregar el nuevo párrafo al contenedor en el HTML
    var container = document.getElementById("contenedor");
    container.appendChild(newParagraph);

    var imagen = document.createElement("img");
    imagen.className = "imagen3"
    imagen.src = "imagenes/tercero.png";
    container.appendChild(imagen);
    container.appendChild(newParagraph);

});





document.addEventListener("DOMContentLoaded", function () {
    // Crear un nuevo elemento de párrafo con título
    var newParagraph = document.createElement("p");
    
    var newTitle = document.createElement("h2");
    var textNode = document.createTextNode("mantén tu motivación");
    newTitle.appendChild(textNode);
    var paragraphText = document.createTextNode("Nuestras funcionalidades y desafíos son divertidos y hacen que aprender se sienta como un juego. ¡Vas a poder formar un hábito de aprendizaje sin esfuerzo! Y, por supuesto, recibirás recordatorios de nuestra adorable mascota, Duo, el búho.");
    newParagraph.appendChild(newTitle);
    newParagraph.appendChild(paragraphText);

    // Agregar el nuevo párrafo al contenedor en el HTML
    var container = document.getElementById("contenedor");
    container.appendChild(newParagraph);
    
    newParagraph.className="parrafo3";
    var imagen = document.createElement("img");
    imagen.className = "imagen4"
    imagen.src = "imagenes/cuarto.png";
    container.appendChild(imagen);
    container.appendChild(newParagraph);
});





document.addEventListener("DOMContentLoaded", function () {
    // Crear un nuevo elemento de párrafo con título
    var newParagraph = document.createElement("p");
    var newTitle = document.createElement("h2");
    var textNode = document.createTextNode("aprendizaje personalizado");
    newTitle.appendChild(textNode);
    var paragraphText = document.createTextNode("Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan según tu desempeño para ayudarte a aprender al nivel adecuado y a tu propio ritmo.");
    newParagraph.appendChild(newTitle);
    newParagraph.appendChild(paragraphText);

    // Agregar el nuevo párrafo al contenedor en el HTML
    var container = document.getElementById("contenedor");
    container.appendChild(newParagraph);

    newParagraph.className="parrafo4";
    var imagen = document.createElement("img");
    imagen.className = "imagen5"
    imagen.src = "imagenes/quinto.png";
    container.appendChild(imagen);
    container.appendChild(newParagraph);
});


document.addEventListener("DOMContentLoaded", function () {
    // Crear un nuevo elemento de párrafo con título
    var newParagraph = document.createElement("p");
    var newTitle = document.createElement("h2");
    var textNode = document.createTextNode("aprende cuando quieras y donde quieras");
    newTitle.appendChild(textNode);
    var paragraphText = document.createTextNode(" ");
    newParagraph.appendChild(newTitle);
    newParagraph.appendChild(paragraphText);

    // Agregar el nuevo párrafo al contenedor en el HTML
    var container = document.getElementById("contenedor");
    container.appendChild(newParagraph);

    newTitle.className="parrafo5";
   
    var imagen = document.createElement("img");
    imagen.className = "fondo"
    imagen.src = "imagenes/fondo.avif";
    container.appendChild(imagen);
    container.appendChild(newParagraph);
    
});


//Ya no pude acabar profe, no tuve mucho tiempo, pero le entrego este trabajo honesto. Me costó muchísimo trabajo entenderle




/*document.addEventListener("DOMContentLoaded", function () {
    // Crear un nuevo elemento de párrafo con título
    var newParagraph = document.createElement("p");
    var newTitle = document.createElement("h2");
    var textNode = document.createTextNode("duolingo english test");
    newTitle.appendChild(textNode);
    var paragraphText = document.createTextNode("Nuestro examen de inglés es conveniente, rápido y económico. El Duolingo English Test integra los últimos avances en la ciencia e inteligencia artificial para dar a todas las personas la posibilidad de elegir dónde y cuándo hacer el examen y que puedan dar lo mejor de sí.");
    newParagraph.appendChild(newTitle);
    newParagraph.appendChild(paragraphText);

    // Agregar el nuevo párrafo al contenedor en el HTML
    var container = document.getElementById("contenedor");
    container.appendChild(newParagraph);
});



document.addEventListener("DOMContentLoaded", function () {
    // Crear un nuevo elemento de párrafo con título
    var newParagraph = document.createElement("p");
    var newTitle = document.createElement("h2");
    var textNode = document.createTextNode("duolingo for schools");
    newTitle.appendChild(textNode);
    var paragraphText = document.createTextNode("Maestras y maestros: ¡estamos para ayudarlos! Nuestra herramienta gratuita ayuda a tus estudiantes a aprender idiomas a través de la app de Duolingo, tanto dentro como fuera del salón de clases.");
    newParagraph.appendChild(newTitle);
    newParagraph.appendChild(paragraphText);

    // Agregar el nuevo párrafo al contenedor en el HTML
    var container = document.getElementById("contenedor");
    container.appendChild(newParagraph);
});





document.addEventListener("DOMContentLoaded", function () {
    // Crear un nuevo elemento de párrafo con título
    var newParagraph = document.createElement("p");
    var newTitle = document.createElement("h2");
    var textNode = document.createTextNode("duolingo abc");
    newTitle.appendChild(textNode);
    var paragraphText = document.createTextNode("¡Desde aprender idiomas hasta alfabetismo! Con lecciones de fonética y cuentos divertidos, Duolingo ABC enseña a niños y niñas de entre 3 y 8 años a leer y escribir… ¡y es totalmente gratis!");
    newParagraph.appendChild(newTitle);
    newParagraph.appendChild(paragraphText);

    // Agregar el nuevo párrafo al contenedor en el HTML
    var container = document.getElementById("contenedor");
    container.appendChild(newParagraph);
});





document.addEventListener("DOMContentLoaded", function () {
    // Crear un nuevo elemento de párrafo con título
    var newParagraph = document.createElement("p");
    var newTitle = document.createElement("h2");
    var textNode = document.createTextNode("duolingo math");
    newTitle.appendChild(textNode);
    var paragraphText = document.createTextNode("¡Prueba nuestras lecciones cortas y gratis para matemáticas! Con Duolingo Math, los estudiantes podrán adelantarse en sus clases de matemáticas y los adultos podrán practicar para mejorar su destreza matemática.");
    newParagraph.appendChild(newTitle);
    newParagraph.appendChild(paragraphText);

    // Agregar el nuevo párrafo al contenedor en el HTML
    var container = document.getElementById("contenedor");
    container.appendChild(newParagraph);
});

document.addEventListener("DOMContentLoaded", function () {
    // Crear un nuevo elemento de párrafo con título
    var newParagraph = document.createElement("p");
    var newTitle = document.createElement("h2");
    var textNode = document.createTextNode("aprende idiomas con duolingo");
    newTitle.appendChild(textNode);
    var paragraphText = document.createTextNode(" ");
    newParagraph.appendChild(newTitle);
    newParagraph.appendChild(paragraphText);

    // Agregar el nuevo párrafo al contenedor en el HTML
    var container = document.getElementById("contenedor");
    container.appendChild(newParagraph);
});*/
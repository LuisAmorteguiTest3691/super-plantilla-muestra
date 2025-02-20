// Seleccionamos el contenedor de las cajas y el span donde se mostrará la fecha
const contenedor = document.querySelector('.cajas');
const spanFecha = document.querySelector('.fecha');

// Definimos la cantidad de imágenes (y cajas) que queremos mostrar
const total = 12;

// Arreglo de datos con las URLs para cada enlace, cada objeto tiene un "indice"
const data = [
  { 'indice': '1', 'url': 'https://luisamorteguitest3691.github.io/ECOSHOP---Plantilla-HTML5-multiprop-sito-de-comercio-electr-nico/' },
  { 'indice': '2', 'url': 'https://themewar.com/html/volta/?storefront=envato-elements' },
  { 'indice': '3', 'url': 'https://luisamorteguitest3691.github.io/3.-AllStore---Plantilla-de-tienda-de-comercio-electr-nico-multiconcepto/' },
  { 'indice': '4', 'url': 'https://deothemes.com/envato/zenna/html/index.html?storefront=envato-elements' },
  { 'indice': '5', 'url': 'https://luisamorteguitest3691.github.io/5.-ePro---Tema-HTML-multiprop-sito-para-comercio-electr-nico-con-RTL/' },
  { 'indice': '6', 'url': 'https://luisamorteguitest3691.github.io/6.-Smile---Plantilla-Bootstrap-de-comercio-electr-nico-HTML/' },
  { 'indice': '7', 'url': 'https://luisamorteguitest3691.github.io/7.-Sweet-Pick-Plantilla-HTML-moderna-de-comercio-electr-nico/' },
  { 'indice': '8', 'url': 'https://luisamorteguitest3691.github.io/8.-NeonCart---Plantilla-de-tienda-de-comercio-electr-nico-multiprop-sito/' },
  { 'indice': '9', 'url': 'https://luisamorteguitest3691.github.io/9.-Vue---Plantilla-HTML5-limpia-y-minimalista-de-comercio-electr-nico/' },
  { 'indice': '10', 'url': '' },
  { 'indice': '11', 'url': 'https://luisamorteguitest3691.github.io/11.-Ropa---Plantilla-de-moda-de-comercio-electr-nico/' }
//   { 'indice': '7', 'url': '' }
  // Puedes agregar más objetos si lo deseas para los demás índices
];

// Creamos un array de rutas de imágenes, asumiendo que en la carpeta "img/ecommerce"
// tienes archivos "1.png", "2.png", etc.
const rutasImagenes = Array.from({ length: total }, (_, i) => `img/ecommerce/${i + 1}.png`);
console.log(rutasImagenes);

// Recorremos el array y creamos una caja por cada imagen
rutasImagenes.forEach((ruta, index) => {
  // Número de caja (1-based)
  const numCaja = index + 1;
  
  // Buscamos en "data" el objeto cuyo "indice" coincida con el número de caja
  const objetoData = data.find(item => item.indice === numCaja.toString());
  
  // Creamos el elemento div y le asignamos la clase "caja"
  const caja = document.createElement('div');
  caja.classList.add('caja');
  
  // Creamos el enlace que envolverá la imagen y el overlay
  const enlace = document.createElement('a');
  // Si se encontró el objeto en data, se usa su URL, de lo contrario se usa '#' como fallback.
  enlace.href = objetoData ? objetoData.url : '#';
  // Abrir en una nueva pestaña
  enlace.target = "_blank";
  
  // Creamos el elemento img y le asignamos su ruta y texto alternativo
  const img = document.createElement('img');
  img.src = ruta;
  img.alt = `Imagen ${numCaja}`;
  
  // Creamos el overlay y el texto
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const p = document.createElement('p');
  p.textContent = 'Da clic para ver la plantilla';
  overlay.appendChild(p);
  
  // Agregamos la imagen y el overlay al enlace
  enlace.appendChild(img);
  enlace.appendChild(overlay);
  
  // Agregamos el enlace a la caja
  caja.appendChild(enlace);
  
  // Eventos para el efecto hover dentro de la caja
  caja.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(0.9)';
    overlay.style.opacity = '1';
  });
  
  caja.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    overlay.style.opacity = '0';
  });
  
  // Agregamos la caja al contenedor principal
  contenedor.appendChild(caja);
});

// Obtener la fecha actual y formatearla en español
const fechaActual = new Date();
const fechaFormateada = fechaActual.toLocaleDateString('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});
spanFecha.textContent = fechaFormateada;

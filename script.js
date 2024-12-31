// Obtén el modal
var modal = document.getElementById("myModal");

// Obtén la imagen y el elemento de la modal
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Obtén todas las imágenes de la galería
var images = document.getElementsByClassName("gallery-image");
var currentIndex = 0; // Índice de la imagen actual

// Agrega un evento de clic a cada imagen
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        currentIndex = i; // Establece el índice actual
        openModal(this);
    }
}

// Función para abrir el modal
function openModal(image) {
    modal.style.display = "block"; // Muestra el modal
    modalImg.src = image.src; // Establece la fuente de la imagen en el modal
    captionText.innerHTML = image.alt; // Establece el texto de la descripción
}

// Obtén el elemento de cierre
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón de cerrar, cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Navegación entre imágenes
document.getElementById("prevBtn").onclick = function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Mueve al anterior o al último
    updateModalImage();
}

document.getElementById("nextBtn").onclick = function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Mueve al siguiente o al primero
    updateModalImage();
}

// Función para actualizar la imagen en el modal
function updateModalImage() {
    modalImg.src = images[currentIndex].src; // Cambia la imagen
    captionText.innerHTML = images[currentIndex].alt; // Cambia la descripción
}
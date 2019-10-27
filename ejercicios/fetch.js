const img = document.querySelector('#image');
const loadButton = document.querySelector('#load');
const stopButton = document.querySelector('#stop');
const url = 'https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100';
let controller;

function startLoading() {
  loadButton.disabled = true;
  loadButton.innerText = 'Loading...';
  loadButton.disabled = false;
  stopButton.disabled = false;
}
function stopLoading() {
  loadButton.disabled = false;
  loadButton.innerText = 'Load Image';
}

loadButton.onclick = async function (_) {
  startLoading();
  controller = new AbortController(); // Nos dara los controles para poder abortar una petición fetch

  try {
    const response = await fetch(url, { signal: controller.signal }); // le mandamos como objeto al fetch la señal para mantener ese control
    //  con la peticion y poder concelar en cualquier momento
    const blob = await response.blob(); // nos regresa el binario de la imagen
    const imgUrl = URL.createObjectURL(blob); // Ese binario lo convertimos en un object url para poder utilizarlo en una imagen
    img.src = imgUrl;
    stopButton.disabled = true;
  } catch (error) {
    img.innerHTML = '<h1>Ha ocurrido un error al cargar la imagen...</h1>';
  }

  stopLoading();
};
stopButton.onclick = async function (_) {
  controller.abort(); // con el metodo del Objeto AbortController cancelamos la petición fetch
};

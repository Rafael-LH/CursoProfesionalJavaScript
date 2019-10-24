const img = document.querySelector('#image');
const loadButton = document.querySelector('#load');
const stopButton = document.querySelector('#stop');
const url = 'https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100';

function startLoading() {
  loadButton.disabled = true;
  loadButton.textContent = 'Loading...';
  loadButton.disabled = false;
}
function stopLoading() {
  loadButton.disabled = false;
  loadButton.textContent = 'Load Image';
  loadButton.disabled = true;
}

loadButton.onclick = async function (_) {
  startLoading();
  const response = await fetch(url);
  const blob = await response.blob();
  const imgUrl = URL.createObjectURL(blob)

  stopLoading();
};
stopButton.onclick = async function (_) {
  stopLoading();
};

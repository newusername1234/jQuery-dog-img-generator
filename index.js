const URL = 'https://dog.ceo/api/breeds/image/random';
function getDoggo() {
    $.get(URL)
    .then(data => {
        imgContainer.textContent = '';
        img.src = data.message;
        imgContainer.appendChild(img);
    });
}

const img = document.createElement('img');
img.style.height = '100%';
img.style.width = '100%';
const imgContainer = document.getElementById('img-container');

const button = document.getElementById('button');
button.addEventListener('click', getDoggo);
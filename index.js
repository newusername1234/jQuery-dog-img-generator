let URL = 'https://dog.ceo/api/breeds/list';
function getDoggo(url) {
    $.get(url)
    .then(r => {
        imgContainer.textContent = '';
        img.src = r.message;
        imgContainer.appendChild(img);
    });
}
const dropdown = document.querySelector('select');
dropdown.addEventListener('change', (e) => getDoggo(`https://dog.ceo/api/breed/${e.target.value}/images/random`));

const img = document.createElement('img');
img.style.height = '100%';
img.style.width = '100%';
const imgContainer = document.getElementById('img-container');

// const button = document.getElementById('button');
// button.addEventListener('click', getDoggo(URL));

// new url to pass to getDoggo should be like: /api/breed/{breed name}/images/random
$.get(URL).then(r => r.message.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed;
    option.textContent = breed;
    dropdown.appendChild(option);
}));
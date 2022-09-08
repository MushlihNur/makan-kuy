import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');
const main = document.querySelector('main');
const jumbotron = document.querySelector('.jumbotron');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
})

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});

jumbotron.addEventListener('click', function () {
    drawer.classList.remove('open');
});

let resto = document.querySelector('.resto')
resto.innerHTML = "";

data.restaurants.forEach((restaurants) => {
    resto.innerHTML += `
    <article class="resto-item">
        <img class="resto-item__thumbnail" 
            src="${restaurants.pictureId}" 
            alt="${restaurants.name}">
        <div class="resto-item__content">
            <h1 class="resto-item__name"><a href="#">${restaurants.name}</a></h1>
            <p class="resto-item__city">Lokasi: ${restaurants.city}</p>
            <p class="resto-item__description">${restaurants.description}
            <br><br> (Rating: ${restaurants.rating})</p>
        </div>
    </article>
    `
})
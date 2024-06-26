import './style.css'

const content = document.querySelector('#content');

const homeButtonClickEventHandler = function(e) {
    content.innerHTML = "";
    const header = document.createElement('h1');
    header.textContent = 'Hello from Home!';
    content.appendChild(header);
}

const menuButtonClickEventHandler = function(e) {
    content.innerHTML = "";
    const header = document.createElement('h1');
    header.textContent = 'Hello from Menu!';
    content.appendChild(header);
}

const aboutButtonClickEventHandler = function(e) {
    content.innerHTML = "";
    const header = document.createElement('h1');
    header.textContent = 'Hello from About!';
    content.appendChild(header);
}

const homeButton = document.querySelector('.homeButton');
homeButton.addEventListener('click', homeButtonClickEventHandler);

const menuButton = document.querySelector('.menuButton');
menuButton.addEventListener('click', menuButtonClickEventHandler);

const aboutButton = document.querySelector('.aboutButton');
aboutButton.addEventListener('click', aboutButtonClickEventHandler);
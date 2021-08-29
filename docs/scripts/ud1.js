import { sum } from './operations.js';

const paragraf = document.createElement('p');
paragraf.innerHTML = sum(5, 7);
document.querySelector('main').appendChild(paragraf);

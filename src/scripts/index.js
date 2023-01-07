import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../scripts/data-source';

// console.log('Hello Coders! :)');

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});



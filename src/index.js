import './style.css';
import Icon1 from './images/dots.png';
import Icon2 from './images/refresh.png';

const container = document.querySelector('.container');

const header = document.createElement('section');
const footer = document.createElement('footer');
const inputField = document.createElement('section');

const items = document.createElement('ul');
container.append(header, inputField, items, footer);

// header
header.innerHTML = `<p class="header-text">Today's To Do</p><img class="refresh-icon" src=${Icon2}>`;
header.classList.add('header');

items.classList.add('items');
// input field
inputField.innerHTML = '<input class="input-field" type="text" placeholder="Add to your list">';
inputField.classList.add('input-section');

// list manipulation
const tasks = [{ description: 'have lunch', bool: true, index: 0 },
  { description: 'create portfolio website', bool: false, index: 1 },
  { description: 'solve coding challenges', bool: true, index: 2 }];
tasks.forEach((task) => {
  items.innerHTML += `<li><div class="context"><input class="btns" type="checkbox">${task.description}</div><img src=${Icon1} class="kebab"></li>`;
});

// footer
footer.innerHTML = '<p class="footer-text">Clear all completed</p>';
footer.classList.add('footer');

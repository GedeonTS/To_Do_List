import _ from 'lodash';
import './style.css';
import imgDots from './images/dots.png';
import imgTrash from './images/bin.png';
import showInput from './modules/ShowInput.js';
import Wrapper from './modules/wrapp.js';
import UserTask from './modules/addRemove.js';
import removeChecked from './modules/removeChecked.js';
import SteerChecked from './modules/control.js';
import DragDrop from './modules/dragDrop.js';

Wrapper();

const listItems = [];

const input = document.getElementById('inputD');
const list = document.getElementById('list');
const btn = document.querySelector('.right-arrow');

const addTask = () => {
  const checksItem2 = localStorage.getItem('TaskToday');
  const desc = input.value;
  let listsLength;
  if (!checksItem2) {
    listsLength = 0;
  } else {
    const ArrayStored = localStorage.getItem('TaskToday');
    const ArrayStoredParse = JSON.parse(ArrayStored);
    listsLength = ArrayStoredParse.length;
  }
  const AllTAsksR = new UserTask(desc, false, listsLength);
  AllTAsksR.add();
};

btn.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addTask();
  }
});

const ArrayStored2 = localStorage.getItem('TaskToday');
const ArrayStoredParse2 = JSON.parse(ArrayStored2);

const listR = ArrayStoredParse2;

listR.forEach((a, i) => {
  const listItem = document.createElement('li');
  listItem.setAttribute('data-index', i);
  listItem.setAttribute('draggable', 'true');
  listItem.setAttribute('class', 'listTasks draggable');

  listItem.innerHTML = `
  <input type="checkbox" name="" class="check">
  <p class="pTask" id="ptask${i}">${a.description}<img class="imgTrash" src=${imgDots} id="imdots${i}" alt=""/></p>
  <input value="${a.description}" type="text" class="inputTask" id=${i} />
  <img class="imgRemove" id="imtrash${i}" src=${imgTrash} alt=""/>
  `;
  listItems.push(listItem);
  list.appendChild(listItem);
});

const update = new UserTask();
update.updateStore();
update.removeTask();
showInput();
SteerChecked();
removeChecked();
window.addEventListener('load', update.updateId);
DragDrop(listItems);
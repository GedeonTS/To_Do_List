import _ from 'lodash';
import './style.css';
import imgDots from './images/dots.png';
import imgTrash from './images/bin.png';
import showInput from './modules/ShowInput.js';
import Wrapper from './modules/wrapp.js';
import UserTask from './modules/addRemove.js';
import removeChecked from './modules/removeChecked.js';
import SteerChecked from './modules/control.js';

Wrapper();

const input = document.getElementById('inputD');
const list = document.getElementById('list');

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
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
  }
});

const ArrayStored2 = localStorage.getItem('TaskToday');
const ArrayStoredParse2 = JSON.parse(ArrayStored2);

const listR = ArrayStoredParse2;

listR.forEach((a, i) => {
  list.innerHTML += `<li class="listTasks" draggable="true">
  <input type="checkbox" name="" class="check">
  <p class="pTask" id="ptask${i}">${a.description}<img class="imgTrash" src=${imgDots} id="imdots${i}" alt=""/></p>
  <input value="${a.description}" type="text" class="inputTask" id=${i} />
  <img class="imgRemove" id="imtrash${i}" src=${imgTrash} alt=""/>
  </li>`;
});

const update = new UserTask();
update.updateStore();
update.removeTask();
showInput();
SteerChecked();
removeChecked();
window.addEventListener('load', update.updateId);

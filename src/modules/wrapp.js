import imgRecycle from '../images/refresh.png';

const Wrapper = () => {
  document.body.innerHTML = `<div class="container">
   <h3>Today's To Do
   <img src=${imgRecycle} id="imgRecycle" alt=""/></h3>
   <input type="text" class="holder-text" placeholder="Add to your list..." id="inputD" draggable="true"/>
   <ul id="list"></ul>
   <button class="button_clear" id="btnRemove">Clear all completed</button>
</div>`;
};

export default Wrapper;
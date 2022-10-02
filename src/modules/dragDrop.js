export default function dragDrop(listItems) {
  let dragStartIndex;

  function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('data-index');
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.pTask');
    const itemTwo = listItems[toIndex].querySelector('.pTask');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
  }

  function dragDrop() {
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
  }

  function addEventListener() {
    const draggables = document.querySelectorAll('.draggable');

    draggables.forEach((draggable) => {
      draggable.addEventListener('dragstart', dragStart);
      draggable.addEventListener('dragover', dragOver);
      draggable.addEventListener('drop', dragDrop);
    });
  }

  addEventListener();
}

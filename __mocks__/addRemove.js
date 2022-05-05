const checktem = localStorage.getItem('TaskToday');
let toDoList = [];

class UserTask {
  constructor(content, bool, id1) {
    this.description = content;
    this.completed = bool;
    this.index = id1;
  }

  add() {
    if (!checktem) {
      toDoList.push(this);
      localStorage.setItem('TaskToday', JSON.stringify(toDoList));
      const testing = JSON.parse(localStorage.getItem('TaskToday'));
      return testing.length;
    }
    const ArrayStoredParse = JSON.parse(localStorage.getItem('TaskToday'));
    ArrayStoredParse.push(this);
    localStorage.setItem('TaskToday', JSON.stringify(ArrayStoredParse));
    toDoList = ArrayStoredParse;
    const testing = JSON.parse(localStorage.getItem('TaskToday'));
    return testing.length;
  }

  updateStore() {
    const ArrayStoredParse = JSON.parse(localStorage.getItem('TaskToday'));
    const inputs = document.querySelectorAll('.inputTask');
    inputs.forEach((element) => {
      element.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();

          ArrayStoredParse.forEach((a, i) => {
            const listUpdate = document.getElementById(i);
            ArrayStoredParse[i].description = listUpdate.value;
            localStorage.setItem('TaskToday', JSON.stringify(ArrayStoredParse));
            location.reload();
          });
        }
      });
    });
  }

  updateId() {
    const TasksR = JSON.parse(localStorage.getItem('TaskToday'));
    TasksR.forEach((a, i) => {
      a.index = i;
      localStorage.setItem('TaskToday', JSON.stringify(TasksR));
    });
  }

  removeTask(id) {
    // this.updateId();
    const BookStored = JSON.parse(localStorage.getItem('TaskToday'));
    const BookFiltered = BookStored.filter((book) => book.index !== id);
    localStorage.setItem('TaskToday', JSON.stringify(BookFiltered));
    const testing = JSON.parse(localStorage.getItem('TaskToday'));
    return testing.length;
  }
}

export default UserTask;

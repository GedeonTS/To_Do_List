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

  updateStore(description, id) {
    const ArrayStoredParse = JSON.parse(localStorage.getItem('TaskToday'));
    ArrayStoredParse[id].description = description;
    localStorage.setItem('TaskToday', JSON.stringify(ArrayStoredParse));
    return JSON.parse(localStorage.getItem('TaskToday'))[id].description;
  }

  updateId() {
    const TasksR = JSON.parse(localStorage.getItem('TaskToday'));
    TasksR.forEach((a, i) => {
      a.index = i;
      localStorage.setItem('TaskToday', JSON.stringify(TasksR));
    });
  }

  removeTask(id) {
    this.updateId();
    const BookStored = JSON.parse(localStorage.getItem('TaskToday'));
    const BookFiltered = BookStored.filter((book) => book.index !== id);
    localStorage.setItem('TaskToday', JSON.stringify(BookFiltered));
    const testing = JSON.parse(localStorage.getItem('TaskToday'));
    return testing.length;
  }

  check(id) {
    this.updateId();
    const TasksR = JSON.parse(localStorage.getItem('TaskToday'));
    if (TasksR[id].completed === true) {
      TasksR[id].completed = false;
      localStorage.setItem('TaskToday', JSON.stringify(TasksR));
    } else {
      TasksR[id].completed = true;
      localStorage.setItem('TaskToday', JSON.stringify(TasksR));
    }
  }

  btnRemoveChecked() {
    this.updateId();
    const TasksR = JSON.parse(localStorage.getItem('TaskToday'));
    const BookFiltered = TasksR.filter((book) => book.completed !== true);
    localStorage.setItem('TaskToday', JSON.stringify(BookFiltered));
    return BookFiltered.length;
  }
}

export default UserTask;

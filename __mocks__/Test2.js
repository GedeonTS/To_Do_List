const toDoList = [];

class UserTask {
  constructor(content, bool, id1) {
    this.description = content;
    this.completed = bool;
    this.index = id1;
  }

  add() {
    const checktem = localStorage.getItem('TaskToday');
    toDoList.push(this);
    localStorage.setItem('TaskToday', JSON.stringify(toDoList));
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
    const tasksR = JSON.parse(localStorage.getItem('TaskToday')) || [];
    tasksR.forEach((task, i) => {
      task.index = i;
      localStorage.setItem('TaskToday', JSON.stringify(tasksR));
    });
  }

  removeTask(id) {
    this.updateId();
    const bookStored = JSON.parse(localStorage.getItem('TaskToday'));
    const bookFiltered = bookStored.filter((book) => book.index !== id);
    localStorage.setItem('TaskToday', JSON.stringify(bookFiltered));
    const testing = JSON.parse(localStorage.getItem('TaskToday'));
    return testing.length;
  }

  check(id) {
    this.updateId();
    const tasksR = JSON.parse(localStorage.getItem('TaskToday'));
    if (tasksR[id].completed === true) {
      tasksR[id].completed = false;
      localStorage.setItem('TaskToday', JSON.stringify(tasksR));
    } else {
      tasksR[id].completed = true;
      localStorage.setItem('TaskToday', JSON.stringify(tasksR));
    }
  }

  btnRemoveChecked() {
    this.updateId();
    const tasksR = JSON.parse(localStorage.getItem('TaskToday'));
    const bookFiltered = tasksR.filter((book) => book.completed !== true);
    localStorage.setItem('TaskToday', JSON.stringify(bookFiltered));
    return bookFiltered.length;
  }
}

export default UserTask;

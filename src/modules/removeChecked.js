import UserTask from './addRemove.js';

const removeChecked = () => {
  const buttonRemove = document.getElementById('btnRemove');
  const checkBoxs = document.querySelectorAll('.check');
  const TasksR = JSON.parse(localStorage.getItem('TaskToday'));
  checkBoxs.forEach((check, i) => {
    check.addEventListener('click', () => {
      if (TasksR[i].completed === true) {
        TasksR[i].completed = false;
        checkBoxs[i].checked = false;
        document.getElementById(`ptask${i}`).style.textDecoration = 'none';
        localStorage.setItem('TaskToday', JSON.stringify(TasksR));
      } else {
        TasksR[i].completed = true;
        checkBoxs[i].checked = true;
        document.getElementById(`ptask${i}`).style.textDecoration = 'line-through rgb(68, 68, 68)';
        localStorage.setItem('TaskToday', JSON.stringify(TasksR));
      }
    });
    buttonRemove.addEventListener('click', () => {
      const BookFiltered = TasksR.filter((book) => book.completed !== true);
      localStorage.setItem('TaskToday', JSON.stringify(BookFiltered));
      location.reload();
      new UserTask().updateId();
    });
  });
};

export default removeChecked;
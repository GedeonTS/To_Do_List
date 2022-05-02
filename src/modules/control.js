const SteerChecked = () => {
  const StoreCheck = JSON.parse(localStorage.getItem('TaskToday'));

  StoreCheck.forEach((a, i) => {
    const checkBoxs = document.querySelectorAll('.check');
    if (a.completed === true) {
      checkBoxs[i].checked = true;
      document.getElementById(`ptask${i}`).style.textDecoration = 'line-through rgb(68, 28, 68)';
    }
  });
};

export default SteerChecked;

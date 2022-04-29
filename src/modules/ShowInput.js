const showInput = () => {
  const allList = document.querySelectorAll('.listTasks');
  allList.forEach((a, i) => {
    a.addEventListener('mouseover', () => {
      document.getElementById(i).style.display = 'flex';
      document.getElementById(`ptask${i}`).style.display = 'none';
      document.getElementById(`imtrash${i}`).style.display = 'flex';
      document.getElementById(`imdots${i}`).style.display = 'none';
    });
    a.addEventListener('mouseout', () => {
      document.getElementById(i).style.display = 'none';
      document.getElementById(`ptask${i}`).style.display = 'flex';
      document.getElementById(`imtrash${i}`).style.display = 'none';
      document.getElementById(`imdots${i}`).style.display = 'flex';
    });
  });
};

export default showInput;
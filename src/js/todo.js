const taskName = document.getElementById('task-name');
const taskDesc = document.getElementById('task-description');
const submitBtn = document.getElementById('submit-btn');
const taskList = document.getElementById('task-list');

submitBtn.addEventListener('click', () => {
  const userTask = taskName.value;
  const userDesc = taskDesc.value;
  if ((userTask.length >= 1 && userDesc.length >= 1)) {
    localStorage.setItem(userTask, userDesc);
    window.location.reload();
  } else {
    alert('Please input a valid task and description.');
  }
});

function newButton(i) {
  const removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'Remove';
  removeBtn.setAttribute('class', 'remove-btn');
  removeBtn.setAttribute('id', i);
  removeBtn.setAttribute('onClick', `removeElement(${i})`);
  document.getElementById(`div-${i}`).appendChild(removeBtn);
}

for (let i = 0; i < localStorage.length; i += 1) {
  const task = localStorage.key(i);
  const desc = localStorage.getItem(task);
  taskList.innerHTML += `<div 
      class="new-task" 
      id="div-${i}" 
      onClick="markForRemoval(${i})">
    <h3 class="task-appended">${task}</h3>
    <p class="desc-appended">${desc}</p>
    </div>`;
  newButton(i);
}

function markForRemoval(clickedId) {
  const clickedDiv = document.getElementById(`div-${clickedId}`);
  const childRemoveBtn = document.getElementById(clickedId);
  if (childRemoveBtn.style.visibility === 'visible') {
    clickedDiv.style.backgroundColor = '#008B78';
    childRemoveBtn.style.visibility = 'hidden';
    return;
  }
  clickedDiv.style.backgroundColor = '#B25C8B';
  childRemoveBtn.style.visibility = 'visible';
  clickedDiv.parentNode.appendChild(clickedDiv);
}

function removeElement(clickedId) {
  const element = document.getElementById(`div-${clickedId}`);
  element.parentNode.removeChild(element);
  for (let i = 0; i < localStorage.length; i += 1) {
    if (clickedId === i) {
      const key = localStorage.key(i);
      localStorage.removeItem(key);
    }
  }
  window.location.reload();
}


// Failed attempt at fixing linting error without using innerHTML:

// newTaskDiv = (id) => {
//   const styledTaskDiv = document.createElement('div');
//   styledTaskDiv.setAttribute('class', 'new-task');
//   styledTaskDiv.setAttribute('id', `div=${id}`);
//   styledTaskDiv.setAttribute('onClick', `markForRemoval(${id}`);
//   taskList.insertBefore(styledTaskDiv);
// }

// function newTaskTitle(task) {
//   const styledTaskTitle = document.createElement('h3');
//   styledTaskTitle.setAttribute('class', 'task-appended');
//   styledTaskTitle.innerHTML += task;
// }

// function newTaskDesc(desc) {
//   const styledTaskDesc = document.createElement('p');
//   styledTaskDesc.setAttribute('class', 'desc-appended');
//   styledTaskDesc.innerHTML += desc;
// }

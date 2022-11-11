import { Functionality } from './functionality.js';
import { Updates } from './updates.js';

const func = new Functionality();

function logList(index) {
  const ul = document.getElementById('list');
  const li = document.createElement('li');

  const check = document.createElement('input');
  check.type = 'checkbox';
  check.name = 'name';
  check.id = 'check';

  check.addEventListener('change', (e) => {
    new Updates().update(e, func, index);
    check.checked = func.items[index].completed;
    if (check.checked) {
      document.getElementById('clear').addEventListener('click', (e) => {
        li.style = 'display: none';
      });
    }
  });

  const ellipsis = document.createElement('span');
  ellipsis.className = 'fas fa-ellipsis-v';

  const trash = document.createElement('span');
  trash.className = 'fa fa-trash-o';
  trash.style = 'display: none';

  const txt = document.createElement('span');
  txt.id = 'txt';
  txt.setAttribute('contenteditable', 'true');
  txt.appendChild(document.createTextNode(func.items[index].description));
  txt.addEventListener('click', (e) => {
    trash.style = 'display: block';
    ellipsis.style = 'display: none';
    trash.addEventListener('click', (e) => {
      li.style = 'display: none';
      func.remove(index);
      func.setIndex();
    });
  });

  li.append(check, ellipsis, trash, txt);
  ul.appendChild(li);
}

document.getElementById('add').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const task = document.getElementById('add').value;
    const index = func.items.length;
    if (task) {
      func.popualte(task, index);
      logList(index);
      document.getElementById('add').value = '';
    }
  }
});

document.getElementById('clear').addEventListener('click', (e) => {
  func.clear();
});

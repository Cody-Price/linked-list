var buttonAdd = document.querySelector('.button-add');

create = buttonAdd.addEventListener('click', function () {
  var newElementLi = document.createElement('li');
  var readButton = document.createElement('button', 'class="read-button"');
  var deleteButton = document.createElement('button', 'class="delete-button"');
  var urlContent = document.querySelector('#url-input').value;
  var titleContent = document.querySelector('#title-input').value;
  
  var titleUrlContent = titleContent + ' ' + urlContent;

  var newContent = document.createTextNode(titleUrlContent);
  newElementLi.appendChild(newContent);
  var userList = document.querySelector('#user-list');

  document.body.insertBefore(newElementLi, userList);
  document.body.insertBefore(readButton, userList);
  document.body.insertBefore(deleteButton, userList);

  var newReadContent = document.createTextNode('Read');
  var newDeleteContent = document.createTextNode('Delete');

  readButton.appendChild(newReadContent);
  deleteButton.appendChild(newDeleteContent);

  console.log('click');
})
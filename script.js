var buttonAdd = document.querySelector('.button-add');

create = buttonAdd.addEventListener('click', function () {
  var newElementLi = document.createElement('li');
  var urlContent = document.querySelector('#url-input').value;
  var titleContent = document.querySelector('#title-input').value;
  var titleUrlContent = titleContent + ' ' + urlContent;
  var newContent = document.createTextNode(titleUrlContent);
  newElementLi.appendChild(newContent);
  var userList = document.querySelector('#user-list');

  document.body.insertBefore(newElementLi, userList);


  console.log('click');
})
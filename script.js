var buttonAdd = document.querySelector('.button-add');
var userList = document.querySelector('#user-list');
var urlBar =  document.querySelector('#url-input');
var titleBar = document.querySelector('#title-input');
var urlContent = document.querySelector('#url-input').value;
var titleContent = document.querySelector('#title-input').value;

// var liQueryAll = function() {
//   return document.querySelectorAll('li');
// }
// var readQueryAll = function() {
//   return document.querySelectorAll('.read-button');
// }
// var deleteQueryAll = function() {
//   return document.querySelectorAll('.delete-button');
// }

function addBookmark() {
  var newElementLi = document.createElement('li');
  var readButton = document.createElement('button');
  var deleteButton = document.createElement('button');
  var urlContent = document.querySelector('#url-input').value;
  var titleContent = document.querySelector('#title-input').value;
  var breakElement = document.createElement('br');

  var a = document.createElement('a');
  a.href = urlContent;
  a.innerHTML = urlContent;

  var newBookmark = document.createTextNode(titleContent);
  newElementLi.appendChild(newBookmark);
 

  userList.appendChild(newElementLi);
  userList.appendChild(a);
  a.appendChild(breakElement);
  userList.appendChild(readButton);
  userList.appendChild(deleteButton);

  readButton.setAttribute('class', 'read-button');
  deleteButton.setAttribute('class', 'delete-button');


  var newReadContent = document.createTextNode('Read');
  var newDeleteContent = document.createTextNode('Delete');

  readButton.appendChild(newReadContent);
  deleteButton.appendChild(newDeleteContent);

  readButton.addEventListener('click', function() {
    if (newElementLi.classList.contains('read')) {
      newElementLi.setAttribute('class', '');
      a.setAttribute('class', '');
    }
    else {
      newElementLi.setAttribute('class', 'read');
      a.setAttribute('class', 'read-link');
    }
  })

  deleteButton.addEventListener('click', function() {
    newElementLi.remove();
    a.remove();
    
    readButton.remove();
    deleteButton.remove();
  })

  // let liArray = Array.from(liQueryAll());
  // let readArray = Array.from(readQueryAll());
  // let deleteArray = Array.from(deleteQueryAll())

  // for (var i = 0; i < liArray.length; i++) {
  //   newElementLi.setAttribute('id', [i]);
  // }
  // for (var i = 0; i < readArray.length; i++) {
  //   readButton.setAttribute('id', [i] + 100);
  // }
  // for (var i = 0; i < deleteArray.length; i++) {
  //   deleteButton.setAttribute('id', [i] + 1000);
  // }

}

createBookmark = buttonAdd.addEventListener('click', function () {
  addBookmark();
})

function submitDisabled() {
  if (titleBar.value !== '' && urlBar.value !== '') {
    buttonAdd.disabled = false;
  }
  else {
    buttonAdd.disabled = true;
  }
};

urlBar.addEventListener('paste', function() {
  if (titleBar.value !== '') {
    buttonAdd.disabled = false;
  }
  else {
    buttonAdd.disabled = true;
  }
  console.log('pasted');
})

urlBar.addEventListener('keyup', function() {
  submitDisabled();
});

titleBar.addEventListener('keyup', function() {
  submitDisabled();
});
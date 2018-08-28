var buttonAdd = document.querySelector('.button-add');
var buttonAllReadDelete = document.querySelector('.read-button-delete');
var userList = document.querySelector('#user-list');
var urlBar =  document.querySelector('#url-input');
var titleBar = document.querySelector('#title-input');
var urlContent = document.querySelector('#url-input').value;
var titleContent = document.querySelector('#title-input').value;
var bookmarkTotal = document.querySelector('#link-total').innerText;
bookmarkTotal = parseInt(bookmarkTotal);
var total = 0;

var liQueryAll = function() {
  return document.querySelectorAll('li');
}
var aQueryAll = function() {
  return document.querySelectorAll('a');
}
var readQueryAll = function() {
  return document.querySelectorAll('.read-button');
}
var deleteQueryAll = function() {
  return document.querySelectorAll('.delete-button');
}

function addBookmark() {
  var newElementDiv = document.createElement('div');
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

  userList.appendChild(newElementDiv);

  newElementDiv.setAttribute('class', 'read')
  newElementDiv.appendChild(newElementLi);
  newElementDiv.appendChild(a);
  a.appendChild(breakElement);
  newElementDiv.appendChild(readButton);
  newElementDiv.appendChild(deleteButton);

  readButton.setAttribute('class', 'read-button');
  deleteButton.setAttribute('class', 'delete-button');


  var newReadContent = document.createTextNode('Read');
  var newDeleteContent = document.createTextNode('Delete');

  readButton.appendChild(newReadContent);
  deleteButton.appendChild(newDeleteContent);

  readButton.addEventListener('click', function() {
    if (newElementDiv.classList.contains('read')) {
      newElementDiv.setAttribute('class', '');
      a.setAttribute('class', '');
      // a.setAttribute('class', '');
    }
    else {
      newElementDiv.setAttribute('class', 'read');
      a.setAttribute('class', 'read');
      // a.setAttribute('class', 'read-link');
    }
  })

  deleteButton.addEventListener('click', function() {
    newElementDiv.remove();
    total--;
    document.querySelector('#link-total').innerHTML = total;
  })

  let liArray = Array.from(liQueryAll());
  let readArray = Array.from(readQueryAll());
  let deleteArray = Array.from(deleteQueryAll());
  let aArray = Array.from(aQueryAll());

  for (var i = 0; i < liArray.length; i++) {
    newElementLi.setAttribute('id', [i]);
  }
  for (var i = 0; i < aArray.length; i++) {
    a.setAttribute('id', [i] + 100)
  }
  for (var i = 0; i < readArray.length; i++) {
    readButton.setAttribute('id', [i] + 1000);
  }
  for (var i = 0; i < deleteArray.length; i++) {
    deleteButton.setAttribute('id', [i] + 10000);
  }

  total++;
  document.querySelector('#link-total').innerHTML = total;
}


createBookmark = buttonAdd.addEventListener('click', function () {
  addBookmark();
})

// buttonAllReadDelete.addEventListener('click', function() {
//   document.querySelectorAll('.read').remove();
// })

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

//for turning each li and buttons into arrays with unique identifiers.

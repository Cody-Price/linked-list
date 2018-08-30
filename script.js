var titleBar = document.querySelector('#title-input');
var urlBar =  document.querySelector('#url-input');
var buttonAdd = document.querySelector('.button-add');
var buttonAllReadDelete = document.querySelector('.read-button-delete');
var userList = document.querySelector('#user-list');
var urlContent = document.querySelector('#url-input').value;
var titleContent = document.querySelector('#title-input').value;
var total = 0;
var totalRead = 0;
var totalUnread = 0;

function addBookmark() {
  var newElementDiv = document.createElement('div');
  var newElementLi = document.createElement('li');
  var a = document.createElement('a');
  var readButton = document.createElement('button');
  var deleteButton = document.createElement('button');

  var titleContent = document.querySelector('#title-input').value;
  var urlContent = document.querySelector('#url-input').value;
  
  a.href = urlContent;
  a.innerHTML = urlContent;

  var newBookmark = document.createTextNode(titleContent);
  newElementLi.appendChild(newBookmark);

  userList.appendChild(newElementDiv);
  newElementDiv.appendChild(newElementLi); 
  newElementDiv.appendChild(a);
  newElementDiv.appendChild(readButton);
  newElementDiv.appendChild(deleteButton);

  readButton.setAttribute('class', 'pre-read')
  var newReadContent = document.createTextNode('Read');
  readButton.appendChild(newReadContent);
  
  deleteButton.setAttribute('class', 'delete-button');
  var newDeleteContent = document.createTextNode('Delete');
  deleteButton.appendChild(newDeleteContent);

  readButton.addEventListener('click', function() {
    if (newElementDiv.classList.contains('read')) {
      newElementDiv.setAttribute('class', '');
      a.setAttribute('class', '');
      readButton.setAttribute('class', 'pre-read');
      totalRead--;
      document.querySelector('#read-total').innerHTML = totalRead;
    }
    else {
      newElementDiv.setAttribute('class', 'read');
      a.setAttribute('class', 'read');
      readButton.setAttribute('class', 'read-button');
      totalRead++;
      document.querySelector('#read-total').innerHTML = totalRead;
      totalUnread--;
      document.querySelector('#unread-total').innerHTML = totalUnread;
    }
  })

  deleteButton.addEventListener('click', function() {
    if (newElementDiv.classList.contains('read')) {
      newElementDiv.remove();
      total--;
      document.querySelector('#link-total').innerHTML = total;
      totalRead--;
      document.querySelector('#read-total').innerHTML = totalRead;
    }
    else {
      newElementDiv.remove();
      total--;
      document.querySelector('#link-total').innerHTML = total;
      totalUnread--;
      document.querySelector('#unread-total').innerHTML = totalUnread;
    }
  })
  total++;
  document.querySelector('#link-total').innerHTML = total;
  totalUnread++;
  document.querySelector('#unread-total').innerHTML = totalUnread;
}

createBookmark = buttonAdd.addEventListener('click', function () {
  addBookmark();
})


$('#clear-read').on('click', function() {
  $('.read').remove();
  total = total - totalRead;
  document.querySelector('#link-total').innerHTML = total;
  totalRead = 0;
  document.querySelector('#read-total').innerHTML = totalRead;
})

function submitDisabled() {
  if (titleBar.value !== '' && urlBar.value !== '') {
    buttonAdd.disabled = false;
  }
  else {
    buttonAdd.disabled = true;
  }
};

urlBar.addEventListener('keyup', function() {
  submitDisabled();
});

titleBar.addEventListener('keyup', function() {
  submitDisabled();
});

urlBar.addEventListener('paste', function() {
  if (titleBar.value !== '') {
    buttonAdd.disabled = false;
  }
  else {
    buttonAdd.disabled = true;
  }
});

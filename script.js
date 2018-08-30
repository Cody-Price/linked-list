//global variables
var titleBar = document.querySelector('#title-input');
var urlBar =  document.querySelector('#url-input');
var buttonAdd = document.querySelector('.button-add');
var buttonAllReadDelete = document.querySelector('.read-button-delete');
var userList = document.querySelector('#user-list');
var urlContent = document.querySelector('#url-input').value;
var titleContent = document.querySelector('#title-input').value;
var total = 0;
var totalRead = 0;

//add bookmark function (invoked when add bookmark button is clicked)
function addBookmark() {
  //assigning names to newly created elements
  var newElementDiv = document.createElement('div');
  var newElementLi = document.createElement('li');
  var a = document.createElement('a');
  var readButton = document.createElement('button');
  var deleteButton = document.createElement('button');

  //pulls values out of the title and the url bars
  var titleContent = document.querySelector('#title-input').value;
  var urlContent = document.querySelector('#url-input').value;
  
  //adds the hyperlink reference into the anchor tag and adds text
  //in-between the starting anchor tag and the closing anchor tag
  a.href = urlContent;
  a.innerHTML = urlContent;

  //turns the title content into a textNode (needed for adding text
  //onto another element [appending]) then appends the new text node
  // onto the newly created list item
  var newBookmark = document.createTextNode(titleContent);
  newElementLi.appendChild(newBookmark);

  //selects the user list and appends the new div element
  //then appends our new li, anchor, readbutton, and deletebutton
  //into the new div
  userList.appendChild(newElementDiv);
  newElementDiv.appendChild(newElementLi); 
  newElementDiv.appendChild(a);
  newElementDiv.appendChild(readButton);
  newElementDiv.appendChild(deleteButton);

  //sets the class of pre read to the read button and adds the text
  //'Read' to the button so the user can see word read on the button
  readButton.setAttribute('class', 'pre-read')
  var newReadContent = document.createTextNode('Read');
  readButton.appendChild(newReadContent);
  
  //same as the read button above
  deleteButton.setAttribute('class', 'delete-button');
  var newDeleteContent = document.createTextNode('Delete');
  deleteButton.appendChild(newDeleteContent);

  //adds an event listener to the read button that will add
  //or remove the class of 'read' to the div (styling and total-read
  // counter)
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
    }
  })

  //adds an event listener to the delete button that (on click) will
  //remove the bookmark and decrement the total bookmarks
  //and if it has a class of read will decrement the total-read number
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
    }
  })

  //when 'add bookmark' is clicked the total number of bookmarks
  //will increment and update
  total++;
  document.querySelector('#link-total').innerHTML = total;
}
//invokes the 'addbookmark' function when add bookmark is clicked
createBookmark = buttonAdd.addEventListener('click', function () {
  addBookmark();
})

//jquery for selecting all of the read bookmarks and deleting them
//as well as updating the total bookmarks and total read numbers
$('#clear-read').on('click', function() {
  $('.read').remove();
  total = total - totalRead;
  document.querySelector('#link-total').innerHTML = total;
  totalRead = 0;
  document.querySelector('#read-total').innerHTML = totalRead;
})

//function for disabling the add bookmark button
//checks the values of the inputs and if either are empty will not
//allow  a new bookmark to be added
function submitDisabled() {
  if (titleBar.value !== '' && urlBar.value !== '') {
    buttonAdd.disabled = false;
  }
  else {
    buttonAdd.disabled = true;
  }
};

//adds event listeners to both the url and title bar (in case the
// user starts on the url bar for some reason it will also listen
// for the title bar)
urlBar.addEventListener('keyup', function() {
  submitDisabled();
});

titleBar.addEventListener('keyup', function() {
  submitDisabled();
});

//adds a listener for a mouse paste on the url bar just in case
//the user uses a mouse in stead of a keyboard
urlBar.addEventListener('paste', function() {
  if (titleBar.value !== '') {
    buttonAdd.disabled = false;
  }
  else {
    buttonAdd.disabled = true;
  }
});

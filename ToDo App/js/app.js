const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.ul-list');

const generateTemplate = todo => {
  const html = `
  <li class="list-item">
  <input type="checkbox" class="complete-txt"  name="" id=""><span class="main-text">${todo}</span><div class="edit-list"></div><div class="delete-list"></div>
</li>
  `;
  list.innerHTML += html;
};

// add todos event
addForm.addEventListener('submit', e => {
  
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }

});

const filterTodos = term => {

  // add filtered class
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  // remove filtered class
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

};

// filter todos event
search.addEventListener('keyup', () => {

  const term = search.value.trim().toLowerCase();
  filterTodos(term);

});

// delete todos event
list.addEventListener('click', e => {

  if(e.target.classList.contains('delete-list')){
    e.target.parentElement.remove();
  }

});
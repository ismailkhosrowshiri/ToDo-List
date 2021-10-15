let addForm = document.querySelector(".add");
let search = document.querySelector(".search input");
let list = document.querySelector(".ul-list");
let check = document.querySelector(".complete-txt");
let complete_btn = document.querySelector(".complete");
let active_btn = document.querySelector(".active");
let all_btn = document.querySelector(".all");
let edit_list = document.querySelector(".edit-list");
let main_text = document.querySelector(".main-text");
const generateTemplate = (todo) => {
  const html = `
  <li class="list-item">
  <input type="checkbox" class="complete-txt"  name="" id=""><span class="main-text">${todo}</span><div class="edit-list"></div><div class="delete-list"></div>
</li>
  `;
  list.innerHTML += html;
};

// add todos event
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

const filterTodos = (term) => {
  // add filtered class
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  // remove filtered class
  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// filter todos event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});

// delete todos event
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-list")) {
    e.target.parentElement.remove();
  }
});

active_btn.addEventListener("ckick", function () {
  if (check.checked == true) {
    check.parentElement.classList.add("filterd");
  }
});
// edit function
var edit_input = document.createElement("input");
edit_input.classList.add("edit-input");
edit_input.classList.add("filterd");
edit_input.name = "edit-input";
edit_input.type = "text";
edit_input.value = main_text.innerHTML;

var edit_input_btn = document.createElement("button");
edit_input_btn.classList.add("filterd");
edit_input_btn.classList.add("edit-input-btn");
edit_input_btn.type = "button";

edit_list.addEventListener("click", function () {
  edit_input.classList.remove("filterd");
  main_text.classList.add("filterd");
  edit_input_btn.classList.remove("filterd");
  edit_input_btn.addEventListener("click", function () {
    main_text.textContent = edit_input.value;
    edit_input.classList.add("filterd");
    main_text.classList.remove("filterd");
    edit_input_btn.classList.add("filterd");
  });
});

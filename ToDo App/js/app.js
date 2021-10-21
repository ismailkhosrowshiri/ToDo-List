let addForm = document.querySelector(".add");
let search = document.querySelector(".search input");
let list = document.querySelector(".ul-list");
let complete_btn = document.querySelector(".complete");
let active_btn = document.querySelector(".active");
let all_btn = document.querySelector(".all");

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

// edit todos

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-list")) {
    if (e.target.previousElementSibling.contentEditable !== "true") {
      e.target.previousElementSibling.contentEditable = "true";
    } else {
      e.target.previousElementSibling.contentEditable = "false";
    }
  }
});
// Active Button

active_btn.addEventListener("click", function () {
  let check_id = document.querySelectorAll(".complete-txt");

  for (let i = 0; i < check_id.length; i++) {
    if (check_id[i].checked === true) {
      check_id[i].parentElement.classList.add("filtered");
    } else {
      check_id[i].parentElement.classList.remove("filtered");
    }
  }
});

// Complete Button

complete_btn.addEventListener("click", function () {
  let check_id = document.querySelectorAll(".complete-txt");
  for (let i = 0; i < check_id.length; i++) {
    if (check_id[i].checked !== true) {
      check_id[i].parentElement.classList.add("filtered");
    } else {
      check_id[i].parentElement.classList.remove("filtered");
    }
  }
});
// All Button

all_btn.addEventListener("click", function () {
  let check_id = document.querySelectorAll(".complete-txt");
  for (let i = 0; i < check_id.length; i++) {
    if (check_id[i].parentElement.classList.contains("filtered")) {
      check_id[i].parentElement.classList.remove("filtered");
    }
  }
});

function addElement() {
  const todoItem = document.getElementById("new-todo");
  const item = todoItem.value;
  if (!item) {
    alert("You didnt enter anyting");
    return;
  }
  const list = document.getElementById("list");
  const li = document.createElement("li");
  const text = document.createTextNode(item);

  li.setAttribute("onclick", "this.remove()");

  li.appendChild(text);
  list.appendChild(li);
  todoItem.value = "";
}

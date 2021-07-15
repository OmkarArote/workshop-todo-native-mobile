
const host = 'http://localhost:8888/.netlify/functions/';

// CREATE
const addRestTodo = (todo) => {
  const stringifiedBody = JSON.stringify(todo);
  return fetch(`${host}/createRestTodo`, {
  //return fetch("createRestTodo", {
    body: stringifiedBody,
    method: "POST",
  }).then((response) => {
    return response.json();
  }).catch((err) => {
    throw err;
  });
  
};

// READ
const getRestTodos = async () => {
  const response = await fetch(`${host}/getRestTodos`);
  //const response = await fetch(`/.netlify/functions/getRestTodos`);
  let todos = await response.json();

  return todos.length ? todos : [];
};

// UPDATE
const updateRestTodo = async (todo) => {
  const stringifiedBody = JSON.stringify(todo);
  const response = await fetch(`${host}/updateRestTodo`, {
    body: stringifiedBody,
    method: "PUT",
  });

  let responsejson = await response.json();
  return responsejson;
};

// DELETE
const deleteRestTodo = async (id) => {
  console.log("id", id)
  const stringifiedBody = JSON.stringify({ id });
  const response = await fetch(`${host}/deleteRestTodo`, {
    body: stringifiedBody,
    method: "DELETE",
  });  
  return response;
};

const default_export = {
  getRestTodos,
  addRestTodo,
  deleteRestTodo,
  updateRestTodo
};

export default default_export;

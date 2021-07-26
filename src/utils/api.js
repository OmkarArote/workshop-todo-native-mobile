import {HOST, PORT} from '@env'

//const host = 'http://localhost:8888/.netlify/functions';
//const ipAddress = '192.168.86.35';
//const host = 'http://192.168.86.35:8888';
//const androidIP = '10.0.2.2';
//return fetch(`${host}/.netlify/functions/createRestTodo`, {

//const host = "https://8888-beige-pig-vdeak5ht.ws-us11.gitpod.io/";

//const ipAddress = HOST;
//const port = PORT;

//const host = `https://${ipAddress}:${port}`;
//console.log("host: ", host);

// CREATE 
const addRestTodo = (todo) => {
  const stringifiedBody = JSON.stringify(todo);
  return fetch(`/.netlify/functions/createRestTodo`, {
    body: stringifiedBody,
    method: "POST",
  }).then((response) => {
    return response.json();
  }).catch((error) => {
    console.log(error)
    throw error;
  });
};

// READ
const getRestTodos = async () => {
  //console.log("host: ", host);
/*
  try {
    const response = await fetch(`/.netlify/functions/getRestTodos`);
    let todos = await response.json();
    console.log("todos: ", todos);
    return todos.length ? todos : []  
  } catch (error) {
    console.log(error);
  }
  */
  const response = await fetch(`/.netlify/functions/getRestTodos`);
  let todos = await response.json();

  return todos.length ? todos : [];

};

// UPDATE
const updateRestTodo = async (todo) => {
  const stringifiedBody = JSON.stringify(todo);
  const response = await fetch(`/.netlify/functions/updateRestTodo`, {
    body: stringifiedBody,
    method: "PUT",
  });

  let responsejson = await response.json();
  return responsejson;
};

// DELETE
const deleteRestTodo = async (id) => {
  const stringifiedBody = JSON.stringify({ id });
  const response = await fetch(`/.netlify/functions/deleteRestTodo`, {
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

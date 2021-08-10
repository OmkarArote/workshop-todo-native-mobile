import { HOST, PORT, IS_PROD, GITPOD} from '@env'

// For GitPod
//const host = "https://8888-beige-pig-vdeak5ht.ws-us11.gitpod.io";

// GENERATE
const generateEndpoint = () => {
  const ipAddress = HOST;
  const port = PORT;

  // Netlify deploy
  if (IS_PROD === true) {
    return ``;
  }
  // Running on GitPod
  else if (GITPOD === true) {
    return ipAddress;
  }
  // Local configuration
  else { 
    return `http://${ipAddress}:${port}`;
  }
}

// CREATE 
const addRestTodo = (todo) => {
  const endpoint = generateEndpoint();
  //console.log("endpoint: ", endpoint);
  const stringifiedBody = JSON.stringify(todo);
  return fetch(`${endpoint}/.netlify/functions/createRestTodo`, {
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
  const endpoint = generateEndpoint();
  //console.log("endpoint: ", endpoint);
  const response = await fetch(`${endpoint}/.netlify/functions/getRestTodos`);
  let todos = await response.json();

  return todos.length ? todos : [];
};

// UPDATE
const updateRestTodo = async (todo) => {
  const endpoint = generateEndpoint();
  //console.log("endpoint: ", endpoint);
  const stringifiedBody = JSON.stringify(todo);
  const response = await fetch(`${endpoint}/.netlify/functions/updateRestTodo`, {
    body: stringifiedBody,
    method: "PUT",
  });

  let responsejson = await response.json();
  return responsejson;
};

// DELETE
const deleteRestTodo = async (id) => {
  const endpoint = generateEndpoint();
  //console.log("endpoint: ", endpoint);
  const stringifiedBody = JSON.stringify({ id });
  const response = await fetch(`${endpoint}/.netlify/functions/deleteRestTodo`, {
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

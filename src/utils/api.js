
// GENERATE
const generateEndpoint = () => {
  const ipAddress = process.env.HOST;
  const port = process.env.PORT;

  // Netlify deploy
  if (process.env.IS_PROD === "true") {
    return ``;
  }
  // Running on GitPod
  else if (process.env.GITPOD === "true") {
    return ipAddress;
  }
  // Local configuration
  else { 
    return `http://${ipAddress}:${port}`;
  }
}

// CREATE
const addRestTodo = async (todo) => {
  const endpoint = generateEndpoint();
  const stringifiedBody = JSON.stringify(todo);
  const response = await fetch(`${endpoint}/.netlify/functions/createRestTodo`, {
    body: stringifiedBody,
    method: "POST",
  });

  return response;
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

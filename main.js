const express = require("express");
const { v4: uuidv4 } = require("uuid"); 
const app = express();

const todos = [
  {
    id: uuidv4(), 
    text: "My new todo 1",
    isCompleted: true,
  },
  {
    id: uuidv4(),
    text: "My new todo 2",
    isCompleted: true,
  },
  {
    id: uuidv4(),
    text: "My new todo 3",
    isCompleted: false,
  },
];

app.use(express.json());

app.get("/todo", (req, res) => {
  res.json(todos);
});

app.post("/todo", (req, res) => {
  const newTodo = { ...req.body, id: uuidv4() }; 
  todos.push(newTodo);

  res.json("Todo Added Successfully");
});

app.put("/todo/:index", (req, res) => {
  const { index } = req.params;
  const newData = {...req.body, id: uuidv4()}; 

  todos[index] = newData;

  res.json("Todo Updated Successfully");
});

app.delete("/todo/:index", (req, res) => {
  const { index } = req.params;

  todos.splice(index, 1);

  res.json(todos);
});

app.listen(8000, () => {
  console.log("Server listening at PORT: 8000");
});

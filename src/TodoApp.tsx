import React from "react";
import "./TodoApp.css";
import { TodoInterface } from "./interfaces";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const INITIAL_STATE: TodoInterface[] = [
  {
    id: "0",
    text: "leetcode",
    isCompleted: false
  }
];

const TodoApp = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>(INITIAL_STATE);

  function handleCreate(todo: TodoInterface) {
    const newState: TodoInterface[] = [...todos, todo];
    setTodos(newState);
  }

  function handleRemove(id: string) {
    const newState: TodoInterface[] = todos.filter(todo => todo.id !== id);
    setTodos(newState);
  }

  function handleUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    const newState: TodoInterface[] = [...todos];
    const todo = newState.find(todo => todo.id === id);
    if (todo) {
      todo.text = event.target.value;
    }

    setTodos(newState);
  }

  function handleComplete(id: string) {
    const newState: TodoInterface[] = [...todos];
    const todo = newState.find(todo => todo.id === id);
    if (todo) {
      todo.isCompleted = !todo.isCompleted;
    }

    setTodos(newState);
  }

  return (
    <div className="todo-app">
      <TodoList
        todos={todos}
        handleUpdate={handleUpdate}
        handleRemove={handleRemove}
        handleComplete={handleComplete}
      />
      <TodoForm todos={todos} handleCreate={handleCreate} />
    </div>
  );
};

export default TodoApp;

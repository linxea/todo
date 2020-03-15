import * as React from "react";
import TodoItem from "./TodoItem";
import { TodoListInterface } from "../interfaces";

const TodoList = (props: TodoListInterface) => (
  <div className="todo-list">
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>
          <TodoItem
            todo={todo}
            handleComplete={props.handleComplete}
            handleUpdate={props.handleUpdate}
            handleRemove={props.handleRemove}
          />
        </li>
      ))}
      <li></li>
    </ul>
  </div>
);

export default TodoList;

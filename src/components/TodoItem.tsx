import * as React from "react";
import { TodoItemInterface } from "../interfaces";

const TodoItem = (props: TodoItemInterface) => {
  function removeItemIfElementIsEmpty(element: HTMLInputElement) {
    if (element.value.trim() === "") {
      props.handleRemove(props.todo.id);
    }
  }

  function handleEnter(event: React.KeyboardEvent): void {
    if (event.key === "Enter") {
      const element = event.target as HTMLInputElement;
      element.blur();

      removeItemIfElementIsEmpty(element);
    }
  }

  function handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
    removeItemIfElementIsEmpty(event.target);
  }

  return (
    <div className="todo-item">
      {props.todo.isCompleted ? (
        <div
          className="checkbox-complete"
          onClick={() => props.handleComplete(props.todo.id)}
        ></div>
      ) : (
        <div
          className="checkbox-empty"
          onClick={() => props.handleComplete(props.todo.id)}
        ></div>
      )}
      <input
        value={props.todo.text}
        className="todo-item-text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          props.handleUpdate(event, props.todo.id)
        }
        onKeyPress={event => handleEnter(event)}
        onBlur={event => handleBlur(event)}
      />
      <span
        className="todo-item-remove"
        onClick={() => {
          props.handleRemove(props.todo.id);
        }}
      ></span>
    </div>
  );
};

export default TodoItem;

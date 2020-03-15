import * as React from "react";
import shortid from "shortid";
import { TodoInterface, TodoFormInterface } from "./../interfaces";

const EMPTY_STRING = "";

const TodoForm = (props: TodoFormInterface) => {
  const [formState, setFormState] = React.useState(EMPTY_STRING);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState(event.target.value);
  }

  function handleInputEnter(event: React.KeyboardEvent) {
    const newTodoText = formState.trim();
    if (event.key === "Enter" && newTodoText.length) {
      const newTodo: TodoInterface = {
        id: shortid.generate(),
        text: newTodoText,
        isCompleted: false
      };

      props.handleCreate(newTodo);

      setFormState(EMPTY_STRING);
    }
  }

  return (
    <div className="todo-form">
      <input
        value={formState}
        type="text"
        placeholder="Type your goal"
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
      />
    </div>
  );
};

export default TodoForm;

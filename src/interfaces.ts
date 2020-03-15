export interface TodoInterface {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface TodoItemInterface {
  todo: TodoInterface;
  handleComplete: (id: string) => void;
  handleUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleRemove: (id: string) => void;
}

export interface TodoListInterface {
  todos: TodoInterface[];
  handleComplete: (id: string) => void;
  handleUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleRemove: (id: string) => void;
}

export interface TodoFormInterface {
  todos: TodoInterface[];
  handleCreate: (todo: TodoInterface) => void;
}

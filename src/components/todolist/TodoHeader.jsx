import React from "react";
import { useTodo } from "../../context/todoContext";

const TodoHeader = () => {
  const { setOpenModal, setListTodo } = useTodo();

  return (
    <div className="mt-5 flex items-center">
      <h1 className="text-4xl font-semibold uppercase">Todolist app</h1>
      <div className="flex gap-x-4 ml-auto">
        <button
          className="p-3 rounded-lg bg-blue-500 text-white font-semibold hover:scale-110 active:scale-90 transition-all"
          onClick={() => setOpenModal(true)}
        >
          Add new Todo
        </button>
        <button
          onClick={() => setListTodo([])}
          className="p-3 rounded-lg bg-red-500 text-white font-semibold hover:scale-110 active:scale-90 transition-all"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default TodoHeader;

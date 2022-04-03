import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = React.createContext(undefined);

// base
// const todo = [
//   {
//     title: "hello",
//     done: true
//   }
// ]

const TodoProvider = (props) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [listTodo, setListTodo] = useLocalStorage("todo", []);

  const addToListTodo = (newTodo) => {
    setListTodo((prevItem) => [...prevItem, newTodo]);
  };

  const doneTodo = (id) => {
    const updatedArray = listTodo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: true,
        };
      }
      return todo;
    });

    setListTodo(updatedArray);
  };

  const removeDoneTodo = (id) => {
    const updatedArray = listTodo.filter((todo) => todo.id !== id);
    setListTodo(updatedArray);
  };

  const value = {
    openModal,
    setOpenModal,
    listTodo,
    setListTodo,
    addToListTodo,
    doneTodo,
    removeDoneTodo,
  };

  return <TodoContext.Provider value={value} {...props} />;
};

const useTodo = () => {
  const context = useContext(TodoContext);
  if (typeof context === "undefined")
    throw new Error("useTodo must be used within a TodoProvider");
  return context;
};

export { TodoProvider, useTodo };

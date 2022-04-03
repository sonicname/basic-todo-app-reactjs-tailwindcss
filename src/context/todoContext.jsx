import React, { useContext } from "react";

const TodoContext = React.createContext(undefined);

const TodoProvider = (props) => {
  const [openModal, setOpenModal] = React.useState(false);

  const value = {
    openModal,
    setOpenModal,
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

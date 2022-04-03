import React from "react";

const TodoListWrapper = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-3 mt-5 rounded-md p-3 bg-gray-200">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-semibold text-yellow-500">Todo</h2>
      </div>
      {children}
    </div>
  );
};

export default TodoListWrapper;

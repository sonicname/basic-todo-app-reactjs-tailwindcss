import React from "react";
import { useTodo } from "../../context/todoContext";

const DoneItem = ({ title, id }) => {
  const { removeDoneTodo } = useTodo();
  return (
    <div className="flex gap-5 items-center">
      <h3 className="text-gray-500 text-xl font-medium line-through">
        {title}
      </h3>
      <div className="flex ml-auto">
        <button
          onClick={() => removeDoneTodo(id)}
          className="p-2 bg-black text-white rounded-lg font-semibold hover:scale-110 active:scale-90 transition-all"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default DoneItem;

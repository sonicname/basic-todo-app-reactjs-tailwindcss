import React from "react";

const TodoItem = ({ title }) => {
  return (
    <div className="border-b-2 border-gray-400 flex items-center">
      <h3 className="text-red-500 text-xl font-medium">{title}</h3>
      <div className="ml-auto mb-1 flex gap-x-2">
        <button className="p-2 bg-blue-500 text-white rounded-lg font-semibold hover:scale-110 transition-all active:scale-90">
          Down
        </button>
        <button className="p-2 bg-green-400 text-white rounded-lg font-semibold hover:scale-110 transition-all active:scale-90">
          Done
        </button>
        <button className="p-2 bg-pink-400 text-white rounded-lg font-semibold hover:scale-110 transition-all active:scale-90">
          Up
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

import React from "react";

const DoneListWrapper = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-3 mt-5 rounded-md p-3 bg-gray-200">
      <div className="mb-4 text-center flex-1">
        <h2 className="text-2xl font-semibold text-black">Done List</h2>
      </div>

      {children}
    </div>
  );
};

export default DoneListWrapper;

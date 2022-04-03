import React from "react";
import ReactDOM from "react-dom";
import { Fade } from "react-reveal";

const ModalTodolist = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return;
  return ReactDOM.createPortal(
    <div
      id="modal"
      className={`fixed inset-0 z-[9999] p-5 flex flex-col items-center justify-center ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        id="overlay"
        onClick={handleClose}
        className="absolute inset-0 bg-black bg-opacity-20"
      />
      <Fade bottom>
        <div
          id="modal-content"
          className="bg-white relative z-10 p-10 rounded-lg w-full max-w-[500px] flex flex-col"
        >
          <span
            onClick={handleClose}
            className="absolute top-0 right-0 p-3 flex items-center justify-center hover:scale-125 transition-all"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
                fill="#84878B"
              />
            </svg>
          </span>
          <h2 className="text-black text-center font-semibold text-2xl">
            Add new todo
          </h2>
          <div className="flex flex-col gap-y-2 mt-5">
            <label className="font-medium text-xl" htmlFor="">
              Todo
            </label>
            <input
              className="p-3 border border-black focus:border-blue-500 rounded-lg font-semibold"
              type="text"
              placeholder="Enter your todo"
              maxLength={255}
            />
          </div>
          <button className="mt-5 bg-blue-500 text-white p-3 rounded-lg font-semibold active:scale-90 transition-all">
            Add
          </button>
        </div>
      </Fade>
    </div>,
    document.querySelector("body")
  );
};

export default ModalTodolist;

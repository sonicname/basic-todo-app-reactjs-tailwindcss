import React from "react";
import { Fade } from "react-reveal";
import { useTodo } from "../context/todoContext";
import ModalTodolist from "../components/modal/ModalTodolist";
import TodoItem from "../components/Todolist/TodoItem";
import DoneItem from "../components/Todolist/DoneItem";
import TodoListWrapper from "../components/Todolist/TodoListWrapper";
import DoneListWrapper from "../components/Todolist/DoneListWrapper";
import TodoHeader from "../components/Todolist/TodoHeader";

const Todolist = () => {
  const { openModal, setOpenModal } = useTodo();

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      <Fade right>
        <div className="p-5 w-full">
          <div className="max-w-screen-lg mx-auto flex flex-col gap-y-5">
            {/* Head */}
            <TodoHeader />

            <div className="flex flex-col gap-x-3 items-stretch justify-between">
              <TodoListWrapper>
                <TodoItem title={"Hello"} />
              </TodoListWrapper>
              {/*  */}

              <DoneListWrapper>
                <DoneItem title={"World"} />
              </DoneListWrapper>
            </div>
          </div>
        </div>
      </Fade>
      {openModal && (
        <ModalTodolist open={openModal} handleClose={handleCloseModal} />
      )}
    </React.Fragment>
  );
};

export default Todolist;

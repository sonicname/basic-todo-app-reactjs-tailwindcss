import React from "react";
import { Fade } from "react-reveal";
import { useTodo } from "../context/todoContext";
import ModalTodolist from "../components/modal/ModalTodolist";
import TodoItem from "../components/todolist/TodoItem";
import DoneItem from "../components/todolist/DoneItem";
import TodoListWrapper from "../components/todolist/TodoListWrapper";
import DoneListWrapper from "../components/todolist/DoneListWrapper";
import TodoHeader from "../components/todolist/TodoHeader";

const Todolist = () => {
  const { openModal, setOpenModal, listTodo } = useTodo();

  const listTodoNotDone = listTodo.filter((todo) => todo.done === false);
  const listTodoDone = listTodo.filter((todo) => todo.done);

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

            <div className="flex flex-col gap-y-3 justify-center">
              <TodoListWrapper>
                {listTodoNotDone.length > 0 ? (
                  listTodoNotDone.map((todo) => (
                    <TodoItem key={todo.id} title={todo.title} id={todo.id} />
                  ))
                ) : (
                  <div className="text-gray-500 text-center">
                    Todolist is empty
                  </div>
                )}
              </TodoListWrapper>
              {/*  */}

              <DoneListWrapper>
                {listTodoDone.length > 0 ? (
                  listTodoDone.map((todo) => (
                    <DoneItem key={todo.id} title={todo.title} id={todo.id} />
                  ))
                ) : (
                  <div className="text-gray-500 text-center">
                    List done is empty
                  </div>
                )}
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

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./page/Homepage";
import Todolist from "./page/Todolist";
import About from "./page/About";
import ErrorLanding from "./page/ErrorLanding";
import { TodoProvider } from "./context/todoContext";

const App = () => {
  return (
    <React.Fragment>
      <TodoProvider>
        <Routes>
          <Route path={"/"} element={<Navbar />}>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"/todo"} element={<Todolist />} />
            <Route path={"/about"} element={<About />} />
          </Route>
          <Route path={"*"} element={<ErrorLanding />} />
        </Routes>
      </TodoProvider>
    </React.Fragment>
  );
};

export default App;

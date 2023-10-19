import React, { useReducer } from "react";
import Router from "./routers";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Header from "./Components/Header";
import Main from "./pages/Main"
import { AuthContext } from './context/index';
import initialState from './store/state';
import reducer from './store/reducer';
import { Container } from "react-bootstrap";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState); 

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}>
      <Header />
      {/* <RoleChoice /> */}
      {/* <Main /> */}
      <Container>
        <div>
        </div>
            <Router />
      </Container>
      <div className="card-footer text-left text-small pt-4 mt-5 fs-6" >    </div>
      </AuthContext.Provider>
  );
}

export default App;



// To comment out a block of code in React using VS Code, you can select the code block with mouse and use the keyboard shortcut `Ctrl + K`, then Ctrl + C on Windows or Cmd + K, then Cmd + C on Mac[1]. This will comment out the selected code block using the /* */ syntax enclosed in curly braces { }.
import { createContext, useState } from "react";
import Header from "./components/Header";
import Todolist from "./components/Todolist";

export const themeContext = createContext();

function App() {
  const [mode, setMode] = useState("light");

  function handleMode() {
    mode === "light" ? setMode("dark") : setMode("light");
  }
  return (
    <>
      <themeContext.Provider value={mode}>
        <Header handleMode={handleMode} />
        <Todolist />
      </themeContext.Provider>
    </>
  );
}

export default App;

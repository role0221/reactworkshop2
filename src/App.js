import Menu from "./Components/Menu";
import { createContext, useState } from "react";
import Quiz from "./Components/Quiz";
import './App.css'
import NumScore from "./Components/NumScore";

export const DataContext = createContext()

function App() {
  const [AppState,setAppState] = useState('Menu')
  const [Score,setScore] = useState(0)
  return (
    <DataContext.Provider value={{AppState,setAppState,Score,setScore}}>
    <div className="App">
    <h1> Web Development Quiz</h1> 
    {AppState==="Menu" && <Menu/>}
    {AppState==="Quiz" && <Quiz/>}
    {AppState==="NumScore" && <NumScore/>}
    </div>
 </DataContext.Provider>
  );
}

export default App;

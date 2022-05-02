import { useState } from 'react'
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [select, setSelect] = useState("show")

  const selfn = () => {
    if(select == "add") {
      setSelect("show");
    }
    else {
      setSelect("add");
    }
  }

  return (
    <div className='App'>
      <button onClick={selfn} className='togglebtn'>Add a new Student</button>
      {select == "add" ? <AddStudent/> : <ShowStudents/>}
    </div>
  );
}

export default App

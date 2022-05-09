import {TodoList} from "./components/TodoList"
import {Todo} from "./components/AddTodo";

function App() {
  return (
    <div className='App'>
     <h1>Welcome To Redux</h1>
     <Todo />
     <TodoList />
    </div>
  )
}
export default App


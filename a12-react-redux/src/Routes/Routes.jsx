import { Route, Routes } from "react-router-dom";
import Todo from "../Components/Todos";
import { TodoDetail } from "../Components/TodoDetail";
import { TodoEdit } from "../Components/TodoEdit";

export const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Todo></Todo>}></Route>
            <Route path="/todos/:id" element={<TodoDetail></TodoDetail>}></Route>
            <Route path="/todos/:id/edits" element={<TodoEdit></TodoEdit>}></Route>
        </Routes>
    )
}
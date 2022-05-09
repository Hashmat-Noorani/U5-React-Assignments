import {useNavigate} from "react-router-dom";

import {Link} from "react-router-dom";

 export const  TodoList =({todos})=>{
    const navigate = useNavigate();

    const handleStatus = async (id)=>{
        let res = await fetch(`http://localhost:5000/todos/${id}`);
        let data = await res.json();

        const payload = {
            title: data.title,
            status: !data.status,
        };

        fetch(`http://localhost:5000/todos/${id}`,{
            method:"PUT",
            body:JSON.stringify(payload),
            headers:{
                "Content-Type": "application/json",
            },
        }).then((res)=> res.json())
          .then((res)=>{
              navigate("/");
          });

    };

    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/todos/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
            },
        });
    }

    return (
        <div className="tododiv">
            {todos.map((e)=>(
                <div className="eachItm">
                    <Link to={`/todos/${e.id}`} className="linkdiv">
                        <div key={e.id}>
                            <p>{e.title}</p>
                        </div>
                    </Link>
                    <button onClick={()=>handleStatus(e.id)}>{e.status? "Completed" : "Mark as Completed"}</button>
                    <Link to={`todos/${e.id}/edits`} className="editLink">
                        <button>Edit Todo</button>
                    </Link>
                    <button className="deleteTodo" onClick={()=>handleDelete(e.id)}>Delete Todo</button>
                </div>
            ))}
        </div>
    )
}
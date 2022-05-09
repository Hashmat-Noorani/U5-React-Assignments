import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export const TodoEdit = () => {
  const { id } = useParams();
  const [single, setSingle] = useState({});
  const navigate = useNavigate();
  const [text, setText] = useState();
  const getOne = async () => {
    let res = await fetch(`http://localhost:5000/todos${id}`);
    let data = await res.json();
    setSingle(data);
    setText(data.title);
  };
  const updateOne = async () => {
    const payload = {
      title: text,
      status: single.status,
    };

    fetch(`http://localhost:5000/todos${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setSingle(res);
        navigate("/");
      });
  };

  useEffect(() => {
    getOne();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={updateOne}>Update a todo</button>
    </div>
  );
};

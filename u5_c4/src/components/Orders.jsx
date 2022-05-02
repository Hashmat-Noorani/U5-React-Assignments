import { useDispatch, useSelector } from "react-redux";
import { setData } from "../Redux/actions";
import { useEffect } from "react";

export const Orders = () => {
  const dispatch = useDispatch();
  const listData = useSelector((store) => store.orders);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await fetch("http://localhost:8080/orders");
    data = await data.json();
    dispatch(setData(data));
  };

  return (
    <div>
      <div>
        <div>
          <select
            onChange={(e) => {
              dispatch(sort(e.target.value));
            }}
            className="controls"
            name="progress"
            id="progress"
          >
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
            {listData.map((e) => {
              return (
                <tr key={e.id} className="orders-row">
                  <td className="id">{e.id}</td>
                  <td className="problem">{e.problem}</td>
                  <td className="owner">{e.owner}</td>
                  <td className="status">{e.status}</td>
                  <td className="cost">{e.cost}</td>
                  <td className="change-status">
                    {/* Show select dropdown only if status is Not Accepted */}
                    {e.status === "Not Accepted" ? (
                      <select className="changeStatus" name="changeStatus">
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                        <option value="Not Accepted">Not Accepted</option>
                      </select>
                    ) : null}
                  </td>
                  <td className="accept">
                    {/* Show this button only if status is Not Accepted */}
                    {/* on change make request to update it in db, and show changed status in table */}
                    {e.status === "Not Accepted" ? (
                      <button>Accept</button>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

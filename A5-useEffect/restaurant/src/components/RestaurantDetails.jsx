import { useEffect, useState } from "react";
import axios from "axios";
import "./RestaurantDetails.css";
import { DisplayData } from "./DisplayData";

export const RestaurantDetails = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  function fetchData() {
    axios
      .get(`http://localhost:8080/restaurants?_page=${page}&_limit=3`)
      .then((d) => setData(d.data))
      .catch((err) => console.log(err));
  }

  function sort(e) {
    if (e.target.value == "l-h") {
      setData([...data].sort((a, b) => a.cost_for_one - b.cost_for_one));
    } else {
      setData([...data].sort((a, b) => b.cost_for_one - a.cost_for_one));
    }
  }

  function filByRatings(e) {
    switch (e.target.value) {
      case "1":
        setData(data.filter((el) => el.rating >= 1));
        break;
      case "2":
        setData(data.filter((el) => el.rating >= 2));
        break;
      case "3":
        setData(data.filter((el) => el.rating >= 3));
        break;
      case "4":
        setData(data.filter((el) => el.rating >= 4));
    }
  }

  function filByPayment(e) {
    if (e.target.value == "cash") {
      setData(data.filter((el) => el.payment_methods.cash == true));
    } else {
      setData(data.filter((el) => el.payment_methods.online == true));
    }
  }
  return (
    <>
      <div className="filters">
        <select onChange={sort}>
          <option value="">Sort by price</option>
          <option value="l-h">Low-High</option>
          <option value="h-l">High-Low</option>
        </select>
        <select onChange={filByRatings}>
          <option value="">Filter</option>
          <option value="1">1 & above</option>
          <option value="2">2 & above</option>
          <option value="3">3 & above</option>
          <option value="4">4 & above</option>
        </select>
        <select onChange={filByPayment}>
          <option value="">Payment Accepted</option>
          <option value="cash">Cash</option>
          <option value="online">Online</option>
        </select>
      </div>
      <div className="container">
        <DisplayData data={data} />
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
};

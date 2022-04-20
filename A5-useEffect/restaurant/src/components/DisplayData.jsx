import { nanoid } from "nanoid";
export const DisplayData = ({ data }) => {
  return data.map((e) => (
    <div key={nanoid()} className="card">
      <div className="top">
        <div className="image left">
          <img src={e.imgUrl} alt="" />
        </div>
        <div className="details mid">
          <h4>{e.name}</h4>
          <p className="gray">{e.categories.join(", ")}</p>
          <p className="gray">{`Cost ₹${e.cost_for_one} for one`}</p>
          <p>Min ₹50 • Up to 30 min</p>
          <p>
            {e.payment_methods.cash
              ? "Accept cash payments only"
              : "Accept online payments only"}
          </p>
        </div>
        <div className="right">
          <p className="rating">{e.rating}</p>
          <p className="gray">{`${e.votes} votes`}</p>
          <p className="gray">{`${e.reviews} reviews`}</p>
        </div>
      </div>
      <div className="bottom">
        <button>Order online</button>
      </div>
    </div>
  ));
};

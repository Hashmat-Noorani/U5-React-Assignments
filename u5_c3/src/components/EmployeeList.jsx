import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
export const EmployeeList = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="list_container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "30px",
        padding: "30px",
        textAlign: "center",
      }}
    >
      {/* On clicking this card anywhere, user goes to user details */}
      {data.map((el) => (
        <div
          onClick={() => {
            navigate("/employeedetails");
          }}
          key={nanoid()}
          className="employee_card"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            borderRadius: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
          }}
        >
          <img
            src={el.image}
            className="employee_image"
            width="100%"
            height="190px"
          />
          <span
            className="employee_name"
            style={{
              margin: "10px 0",
            }}
          >
            {el.employee_name}
          </span>
          <span className="employee_title">{el.title}</span>
        </div>
      ))}
    </div>
  );
};

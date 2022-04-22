import style from "./Output2.module.css";
const Output2 = (props) => {
  return (
    <>
      <div className={style.div2}>
        <div>
          <table
            style={{
              border: "1px solid black",
              marginLeft: "200px",
              width: "800px",
            }}
          >
            <tr>
              <th style={{ border: "1px solid black" }}>Total Customer</th>
              <th style={{ border: "1px solid black" }}>Tip</th>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>{props.length}</td>
              <td style={{ border: "1px solid black" }}>{props.total}</td>
            </tr>
          </table>
        </div>
        <button onClick={props.clickHandle} className={style.Button}>
          Calculate tip and customer
        </button>
      </div>
      <br />
    </>
  );
};
export default Output2;

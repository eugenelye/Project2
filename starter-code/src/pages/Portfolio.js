import React from "react";

const Portfolio = (props) => {
  let things = props.port.map((d, i) => {
    let color = "";
    if (d.change >= 0) {
      color = "green";
    } else if (d.change < 0) {
      color = "red";
    }
    return (
      <div className="results" style={{ color: "white" }}>
        <span
          style={{
            fontWeight: 500,
          }}
        >
          {d.name}
        </span>
        <div style={{ fontSize: 22, fontWeight: 500 }}>US${d.price}</div>
        <div style={{ color }}>{d.change}%</div>
      </div>
    );
  });

  return (
    <div>
      <div>
        <h2> Your Favourites</h2>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        {things}
      </div>
    </div>
  );
};

export default Portfolio;

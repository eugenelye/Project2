import React, { useRef } from "react";
import StockCarousel from "../components/StockCarousel";
import { FaStar } from "react-icons/fa";

const Stocks = (props) => {
  const nameInputRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputName = nameInputRef.current.value;

    if (inputName.length !== 0) {
      props.onClick(inputName);
    }
    nameInputRef.current.value = "";
  };

  if (!props.stock) {
    return null;
  }

  let list = props.stock.map((d, i) => {
    let color = "";
    if (d.change >= 0) {
      color = "green";
    } else if (d.change < 0) {
      color = "red";
    }
    return (
      <div>
        <div className="results drop-shadow-2xl" style={{ color: "white" }}>
          <span
            style={{
              fontWeight: 500,
            }}
          >
            {d.name}
          </span>
          <div style={{ fontSize: 22, fontWeight: 500 }}>{d.symbol}</div>
          <div style={{ fontSize: 22, fontWeight: 500 }}>US${d.price}</div>
          <div style={{ color }}>{d.change}%</div>

          <button
            className="drop-shadow-2xl"
            style={{
              color: "white",
              backgroundColor: "transparent",
              border: "none",
            }}
            onClick={() => props.handleClick(d)}
          >
            <FaStar />
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <StockCarousel></StockCarousel>
      <h1>Stocks</h1>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <form className="centered" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name of Stock"
          ref={nameInputRef}
          style={{ width: "200px" }}
        ></input>
        <button className="button-10" type="submit">
          Search
        </button>
      </form>
      {list}
    </>
  );
};

export default Stocks;

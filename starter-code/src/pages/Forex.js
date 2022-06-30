import React, { useRef } from "react";
import ForexCarousel from "../components/ForexCarousel";
import { FaStar } from "react-icons/fa";

const Forex = (props) => {
  const nameInputRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputName = nameInputRef.current.value;

    if (inputName.length !== 0) {
      props.onClick(inputName);
    }
    nameInputRef.current.value = "";
  };

  if (!props.forex) {
    return null;
  }

  let list = props.forex.map((d, i) => {
    let color = "";
    if (d.change >= 0) {
      color = "green";
    } else if (d.change < 0) {
      color = "red";
    }

    return (
      <>
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

          <button
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
      </>
    );
  });
  return (
    <>
      <ForexCarousel></ForexCarousel>
      <h1 styles={{ fontSize: "300px" }}>Forex</h1>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <form className="centered" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name of Forex"
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

export default Forex;

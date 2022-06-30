import React, { useRef } from "react";
import CryptoCarousel from "../components/CryptoCarousel";
import { FaStar } from "react-icons/fa";

const Cryptocurrency = (props) => {
  const nameInputRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputName = nameInputRef.current.value;

    if (inputName.length !== 0) {
      props.onClick(inputName);
    }
    nameInputRef.current.value = "";
  };

  if (!props.crypto) {
    return null;
  }

  let list = props.crypto.map((d, i) => {
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
          <div style={{ fontSize: 22, fontWeight: 500 }}>{d.symbol}</div>
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
      <CryptoCarousel></CryptoCarousel>
      <h1>Cryptocurrency</h1>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <form className="centered" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name of Cryptocurrency"
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

export default Cryptocurrency;

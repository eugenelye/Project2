import React, { useRef } from "react";

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
    let arrow = <></>;
    if (d.change >= 0) {
      arrow = (
        <i
          className="fas fa-arrow-up"
          style={{ fontSize: "24px", color: "green" }}
        ></i>
      );
    } else if (d.change < 0) {
      arrow = (
        <i
          className="fas fa-arrow-down"
          style={{ fontSize: "24px", color: "red" }}
        ></i>
      );
    }
    console.log(arrow);
    return (
      <>

        <li key={i} className="results">
          Stock Name: {d.name} - Price US$: {d.price} - Change: {d.change}%{" "}
             {arrow}
        </li>
      </>
    );
  });

  return (
    <>
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
        <button className = 'button-10' type="submit">Search</button>
      </form>
      {list}
    </>
  );
};

export default Stocks;

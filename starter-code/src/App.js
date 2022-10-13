import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Stocks from "./pages/Stocks";
import Forex from "./pages/Forex";
import Cryptocurrency from "./pages/Cryptocurrency";
import Portfolio from "./pages/Portfolio";
import NavBar from "./components/NavBar";

function App() {
  const [stockInput, setStockInput] = useState("");
  const [stock, setStock] = useState([]);
  const [forex, setForex] = useState([]);
  const [crypto, setCrypto] = useState([]);
  const [port, setPort] = useState([]);

  const addToFavourite = (item) => {
    setPort((prevState) => {
      return [...prevState, item];
    });
  };


  const handleStockSubmit = async (input) => {
    if (input) {
      const url = `https://api.twelvedata.com/time_series?apikey=b6ebfbfe83a1449cbeead2d97b8c2547&interval=1day&symbol=${input}`;
      const res = await fetch(url);
      const data = await res.json();
      setStock((prevState) => {
        return [
          ...prevState,
          {
            name: data.meta.symbol,
            price: parseFloat(data.values[0].open).toFixed(2),
            change: parseFloat(
              ((data.values[0].open - data.values[1].open) /
                data.values[0].open) *
                100
            ).toFixed(2),
          },
        ];
      });
    }
  };

  const handleForexSubmit = async (input) => {
    if (input) {
      const url = `https://api.twelvedata.com/time_series?apikey=b6ebfbfe83a1449cbeead2d97b8c2547&interval=1day&symbol=${input}`;
      const res = await fetch(url);
      const data = await res.json();
      setForex((prevState) => {
        return [
          ...prevState,
          {
            name: data.meta.symbol,
            price: parseFloat(data.values[0].open).toFixed(2),
            change: parseFloat(
              ((data.values[0].open - data.values[1].open) /
                data.values[0].open) *
                100
            ).toFixed(2),
          },
        ];
      });
    }
  };

  const handleCryptoSubmit = async (input) => {
    if (input) {
      const url = `https://api.twelvedata.com/time_series?apikey=b6ebfbfe83a1449cbeead2d97b8c2547&interval=1day&symbol=${input}`;
      const res = await fetch(url);
      const data = await res.json();
      setCrypto((prevState) => {
        return [
          ...prevState,
          {
            name: data.meta.currency_base,
            symbol: data.meta.symbol,
            price: parseFloat(data.values[0].open).toFixed(2),
            change: parseFloat(
              ((data.values[0].open - data.values[1].open) /
                data.values[0].open) *
                100
            ).toFixed(2),
          },
        ];
      });
    }
  };

  return (
    <div className="container">
      <NavBar></NavBar>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/stocks"
            element={
              <Stocks
                stock={stock}
                onClick={handleStockSubmit}
                handleClick={addToFavourite}
              />
            }
          />
          <Route
            path="/forex"
            element={
              <Forex
                forex={forex}
                onClick={handleForexSubmit}
                handleClick={addToFavourite}
              />
            }
          />
          <Route
            path="/crypto"
            element={
              <Cryptocurrency
                crypto={crypto}
                onClick={handleCryptoSubmit}
                handleClick={addToFavourite}
              />
            }
          />
          <Route path="/portfolio" element={<Portfolio port={port} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

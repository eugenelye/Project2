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
  // const [error, setError] = useState(null);
  const [port, setPort] = useState([]);

  const addToFavourite = (item) => {
    setPort((prevState) => {
      return [...prevState, item];
    });
  };

  const autoStockCompleteAPI = async (input) => {
    if (input) {
      const url = `https://yfapi.net/v6/finance/autocomplete?region=US&lang=en&query=${input}`;
      const config = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "lanEkvG4jR39CDQEVHrZr4LZbI9CRwvu3i2cOHLU",
        },
      };

      const response = await fetch(url, config);
      const data = await response.json();
      setStockInput(data.ResultSet.Result[0]);
    }
  };

  const handleStockSubmit = async () => {
    if (stockInput) {
      const url = `https://api.twelvedata.com/time_series?apikey=b6ebfbfe83a1449cbeead2d97b8c2547&interval=1day&symbol=${stockInput.symbol}`;
      const res = await fetch(url);
      const data = await res.json();
      setStock((prevState) => {
        return [
          ...prevState,
          {
            name: stockInput.name,
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

  useEffect(() => {
    handleStockSubmit();
  }, [stockInput]);

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
                onClick={autoStockCompleteAPI}
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
            path="/cryptocurrency"
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

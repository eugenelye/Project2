import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Stocks from "./pages/Stocks";
import Forex from "./pages/Forex";
import Cryptocurrency from "./pages/Cryptocurrency";
import NavBar from "./components/NavBar";

function App() {
  const [stock, setStock] = useState([]);
  const [forex, setForex] = useState([]);
  const [crypto, setCrypto] = useState([]);
  const [error, setError] = useState(null);

  // const fetchStock = async (url) => {
  //   setError(null);
  //   try {
  //     const res = await fetch(url);

  //     if (res.status !== 200) {
  //       throw new Error("Something went wrong.");
  //     }
  //     const data = await res.json();
  //     setStock((prevState) => {
  //       return [...prevState, {name: data.meta.symbol, price: data.values[0].open}];
  //   });
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  // useEffect(() => {
  //   const url =
  //     "https://api.twelvedata.com/time_series?apikey=b6ebfbfe83a1449cbeead2d97b8c2547&interval=1day&symbol=goog";
  //   fetchStock(url);
  // }, []);


  const handleStockSubmit = async (input) => {
    if (input) {
      const url = `https://api.twelvedata.com/time_series?apikey=b6ebfbfe83a1449cbeead2d97b8c2547&interval=1day&symbol=${input}`;
      const res = await fetch(url);
      const data = await res.json();
      setStock((prevState) => {
        return [...prevState, {name: data.meta.symbol, price: parseFloat(data.values[0].open).toFixed(2), change: parseFloat((data.values[0].open-data.values[1].open)/data.values[0].open*100).toFixed(2)}];
    });
    }
  
  };

  // const fetchForex = async (url) => {
  //   setError(null);
  //   try {
  //     const res = await fetch(url);

  //     if (res.status !== 200) {
  //       throw new Error("Something went wrong.");
  //     }
  //     const data = await res.json();
  //     setForex({name: data.meta.symbol, price: data.values[0].open});
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  // useEffect(() => {
  //   const url =
  //     "https://api.twelvedata.com/time_series?apikey=b6ebfbfe83a1449cbeead2d97b8c2547&interval=1day&symbol=sgd/usd";
  //   fetchForex(url);
  // }, []);

  const handleForexSubmit = async (input) => {
    if (input) {
      const url = `https://api.twelvedata.com/time_series?apikey=b6ebfbfe83a1449cbeead2d97b8c2547&interval=1day&symbol=${input}`;
      const res = await fetch(url);
      const data = await res.json();
      setForex((prevState) => {
        return [...prevState, {name: data.meta.symbol, price: parseFloat(data.values[0].open).toFixed(2), change: parseFloat((data.values[0].open-data.values[1].open)/data.values[0].open*100).toFixed(2)}];
    });
    }
  
  };



  // const fetchCrypto = async (url) => {
  //   setError(null);
  //   try {
  //     const res = await fetch(url);

  //     if (res.status !== 200) {
  //       throw new Error("Something went wrong.");
  //     }
  //     const data = await res.json();
  //     setCrypto({name: data.meta.symbol, price: data.values[0].open});
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  // useEffect(() => {
  //   const url =
  //     "https://api.twelvedata.com/time_series?apikey=b6ebfbfe83a1449cbeead2d97b8c2547&interval=1day&symbol=btc/sgd";
  //   fetchCrypto(url);
  // }, []);

  const handleCryptoSubmit = async (input) => {
    if (input) {
      const url = `https://api.twelvedata.com/time_series?apikey=b6ebfbfe83a1449cbeead2d97b8c2547&interval=1day&symbol=${input}`;
      const res = await fetch(url);
      const data = await res.json();
      setCrypto((prevState) => {
        return [...prevState, {name: data.meta.symbol, price: parseFloat(data.values[0].open).toFixed(2), change: parseFloat((data.values[0].open-data.values[1].open)/data.values[0].open*100).toFixed(2)}];
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
            element={<Stocks  stock={stock} onClick={handleStockSubmit} />}
          />
          <Route
            path="/forex"
            element={<Forex forex={forex} onClick={handleForexSubmit} />}
          />
          <Route
            path="/cryptocurrency"
            element={
              <Cryptocurrency crypto={crypto} onClick={handleCryptoSubmit} />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

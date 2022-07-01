import React, { useEffect, useState } from "react";
import cryptoArr from "../crypto";

import AliceCarousel from "react-alice-carousel";

const CryptoCarousel = () => {
  const [cryptoList, setCryptoList] = useState([]);

  const handleCryptoSubmit = async (d) => {
    const url = `https://api.twelvedata.com/time_series?apikey=b6ebfbfe83a1449cbeead2d97b8c2547&interval=1day&symbol=${d}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data) {
      return null;
    } else {
      setCryptoList((prevState) => {
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

  useEffect(() => {
    cryptoArr.forEach((d) => {
      handleCryptoSubmit(d);
    });
  }, []);

  let items = cryptoList.map((d) => {
    let color = "";
    if (d.change >= 0) {
      color = "green";
    } else if (d.change < 0) {
      color = "red";
    }
    return (
      <div>
        <span
          style={{
            fontWeight: 500,
          }}
        >
          {d.name}
        </span>
        <div style={{ fontSize: 22, fontWeight: 500 }}>{d.symbol}</div>
        <div style={{ fontSize: 22, fontWeight: 500 }}>${d.price}</div>
        <div style={{ color }}>{d.change}%</div>
      </div>
    );
  });

  return (
    <div>
      <AliceCarousel
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        items={items}
        autoPlay
      ></AliceCarousel>
    </div>
  );
};

export default CryptoCarousel;

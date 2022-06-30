import React, { useEffect, useState } from "react";
import forexArr from "../forex";

import AliceCarousel from "react-alice-carousel";

const ForexCarousel = () => {
  const [forexList, setForexList] = useState([]);

  const handleForexSubmit = async (d) => {
    const url = `https://api.twelvedata.com/time_series?apikey=b6ebfbfe83a1449cbeead2d97b8c2547&interval=1day&symbol=${d}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data) {
      return null;
    } else {
      setForexList((prevState) => {
        console.log(data);
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

  useEffect(() => {
    forexArr.forEach((d) => {
      handleForexSubmit(d);
    });
  }, []);

  let items = forexList.map((d) => {
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
        <div style={{ fontSize: 22, fontWeight: 500 }}>{d.price}</div>
        <div style={{ color }}>{d.change}%</div>
      </div>
    );
  });

  return (
    <div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        items={items}
        autoPlay
      ></AliceCarousel>
    </div>
  );
};

export default ForexCarousel;

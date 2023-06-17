import "../styles/amazon.css";
import Cards from "./Cards";
import React, { useState, useEffect } from "react";

const Amazon = ({ handleClick }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products/";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  for (let dict in data) {
    data[dict].amount = 1;
  }

  return (
    <section>
      {data.map((item) => (
        <Cards item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon
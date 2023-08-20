import React, { useEffect, useState } from "react";
import HouseCard from "../houseCards";
const { REACT_APP_BASE_URL: url } = process.env;


const Home = (props) => {
  const [data, setData] = useState([])
  console.log(url);
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res?.data)
      });
  }, []);
  return (
    <div className="container">
      {data.map((value)=>{
        return <HouseCard data={value} />
      })}
    </div>
  );
};

export default Home;

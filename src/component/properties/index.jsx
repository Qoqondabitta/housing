import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HouseCard from "../houseCards";
import { ContainerProperty } from "./style";
const { REACT_APP_BASE_URL: url } = process.env;


const Home = (props) => {
  const [data, setData] = useState([])
  const {search} = useLocation()
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res?.data || [])
      });
  }, [search]);
  return (
    <ContainerProperty>
      {data.map((value)=>{
        return <HouseCard data={value} />
      })}
    </ContainerProperty>
  );
};

export default Home;

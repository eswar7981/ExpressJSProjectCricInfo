import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect, Routes } from "react";

const PlayerStats = () => {
  const [data, setData] = useState([{ message: "loading" }]);

  const [name, setName] = useState("");
  const history = useNavigate();

  

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/?name=${name}`)
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div className="form" style={{display:'flex',justifyContent:'center'}}>
        <form action="/playerstats/searchPlayer/ada?name=eswar" method="post">
          <input name="name" style={{width:'200px',height:'20px'}} onChange={nameHandler} value={name}></input>
          <NavLink to={`/playerstats/searchPlayer/ad?name=${name}`}>
            <button style={{height:'20px',marginLeft:'20px',font:'20px',backgroundColor:'darkblue',color:'white'}} type="submit">Search</button>
          </NavLink>
        </form>
        
      </div>
    </>
  );
};

export default PlayerStats;

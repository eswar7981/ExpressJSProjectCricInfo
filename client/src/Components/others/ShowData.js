import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import "./ShowData.css";

const ShowData = () => {
  const [details, setDetails] = useState();
  const [playerName, setPlayername] = useSearchParams();
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost:5000/playerstats/searchPlayer/ss?name=${playerName.get(
        "name"
      )}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDetails(data);
      })
      .catch((err) => {
        setDetails(err);
      });
  }, []);

  return (
    <>
      {details && (
        <div className="outerBoundary">
          <div className="name">
            <p>{details.name}</p>
          </div>
          <div className="photo">
            <img src={`${details.photoURL}`}/>
          </div>
          <div className="description" >
            <p>Career: {details.career}</p>
          </div>
          <div style={{display:'flex',justifyContent:'center'}}>
          <div className="labels">
            <label>
                DOB
            </label>
            <label>
                Birth Place
            </label>
            <label>
                Number of Matches
            </label>
            <label>
                Average
            </label>
           
            <label>
                Half Centuries
            </label>
            <label>
                Centuries
            </label>
            <label>
                High Score
            </label>
          
            <label>
                Wickets
            </label>
          </div>
          <div className="inputs">
            <input readOnly value={details.DOB}></input>
            <input readOnly value={details.birthPlace}></input>
            <input readOnly value={details.noOfMatches}></input>
            <input readOnly value={details.average}></input>
            <input readOnly value={details.halfCenturies}></input>
            <input readOnly value={details.centuries}></input>
            <input readOnly value={details.highestScore}></input>
            <input readOnly value={details.wickets}></input>
        
          </div>
          </div>
          <div className="edit">
          <NavLink to={`/playerstats/editPlayerInfo/ad?name=${details.name}`}>
            <button>Edit Profile</button>
          </NavLink>
        </div>
        </div>
      )}
    </>
  );
};

export default ShowData;

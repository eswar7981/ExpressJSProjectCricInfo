import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./AddPlayer.css";
const AddPlayer = () => {

  const navigate=useNavigate()

  useEffect(() => {
    fetch("http://localhost:5000/playerstats/editPlayerInfo");
  }, []);
  const [details, setPlayerDetails] = useState({
    Name: "",
    DOB: "",
    photoUrl: "",
    birthPlace: "",
    career: "",
    totalMatches:null,
    highScore: null,
    centuries:null,
    halfCenturies: null,
    wickets: null,
    average:null,
    
  });
  

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details)
    console.log("submit handler");

    fetch(`http://localhost:5000/playerstats/submitPlayerData`, {
      method: "post",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/playerstats");
  };



  const nameHandler = (e) => {
    setPlayerDetails({ ...details, ["Name"]: e.target.value });
  };

  const DOBHandler = (e) => {
    setPlayerDetails({ ...details, ["DOB"]: e.target.value });
  };
  const photoURLHandler = (e) => {
    setPlayerDetails({ ...details, ["photoUrl"]: e.target.value });
  };

  const careerHandler = (e) => {
    setPlayerDetails({ ...details, ["career"]: e.target.value });
  };
  const totalMatchesHandler = (e) => {
    setPlayerDetails({ ...details, ["totalMatches"]: parseInt(e.target.value ) });
  };

  const highScoreHandler = (e) => {
    setPlayerDetails({ ...details, ["highScore"]: parseInt(e.target.value ) });
  };

  const wicketsHandler = (e) => {
    setPlayerDetails({ ...details, ["wickets"]: parseInt(e.target.value )});
  };
  const halfCenturiesHandler = (e) => {
    setPlayerDetails({ ...details, ["halfCenturies"]: parseInt(e.target.value )});
  };
  const CenturiesHandler = (e) => {
    setPlayerDetails({ ...details, ["centuries"]: parseInt(e.target.value )});
  };

  const averageHandler = (e) => {
    setPlayerDetails({ ...details, ["average"]: parseInt(e.target.value ) });
  };
  const birthPlaceHandler = (e) => {
    setPlayerDetails({ ...details, ["birthPlace"]: e.target.value });
  };

  return (
    <>
      <div className="outerBoundary">
        <form onSubmit={submitHandler}>
       
          <div
            className="title"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h3>Add A New Player</h3>
          </div>
        <div className="formBoundary">
            <div className="form">
              <div className="labels">
                <label>Name:</label>
                <label>Date of Birth:</label>
               
                <label>Photo Url:</label>
                <label>BirthPlace:</label>
                <label>Career:</label>
                <label>Number of Matches:</label>
                <label>HighestScore:</label>
                <label>Fifties:</label>
                <label>Centuries:</label>
                <label>Wickets:</label>
                <label>Average:</label>
              </div>
              <div className="inputs">
                <input
                  required
                  type="text"
                  name="playerName"
                  onChange={nameHandler}
                  value={details.Name}
                />
                <input
                  required
                  type="date"
                  name="playerDOB"
                  onChange={DOBHandler}
                  value={details.DOB}
                />
                <input
                  required
                  type="text"
                  name="playerPhoto"
                  onChange={photoURLHandler}
                  value={details.photoUrl}
                />
                <input
                  required
                  type="text"
                  name="playerBirthPlace"
                  onChange={birthPlaceHandler}
                  value={details.birthPlace}
                />
                <input
                  required
                  type="text"
                  name="playerCareer"
                  onChange={careerHandler}
                  value={details.career}
                />
                <input
                  required
                  type="number"
                  name="playerTotalMatches"
                  onChange={totalMatchesHandler}
                  value={details.totalMatches}
                />
                <input
                  required
                  type="number"
                  name="playerHighestScore"
                  onChange={highScoreHandler}
                  value={details.highScore}
                />
                <input
                  required
                  type="number"
                  name="playerHalfCenturies"
                  onChange={halfCenturiesHandler}
                  value={details.halfCenturies}
                />
                <input
                  required
                  type="number"
                  name="playerCenturies"
                  onChange={CenturiesHandler}
                  value={details.centuries}
                />
                <input
                  required
                  type="number"
                  name="playerWickets"
                  onChange={wicketsHandler}
                  value={details.wickets}
                />
                <input
                  required
                  type="number"
                  name="playerAverage"
                  onChange={averageHandler}
                  value={details.average}
                />
              </div>
             
            </div>
            <div className="button">
               
                  <button type="submit"> Submit</button>
                
              </div>
          </div>
          <div>
         
          </div>
          
        </form>
      </div>
    </>
  );
};

export default AddPlayer;

import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
const EditPlayer = () => {
  const navigate = useNavigate();
  const [isSubmit, setSubmit] = useState(false);
  
  const [Details, setDetails] = useState();
  const [playerName, setPlayername] = useSearchParams();
  const [name, setName] = useState("");
  const [details, setPlayerDetails] = useState({
    name: "",
    DOB: "",
    photoURL: "",
    birthPlace: "",
    career: "",
    noOfMatches: "",
    highestScore: "",
    centuries: null,
    halfCenturies: "",
    wickets: "",
    average: "",
    beforeName:''
  });

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
        
        setPlayerDetails({ ...data, ["beforename"]:data.name })
       console.log(details)
      }
      )
      .catch((err) => {
        setDetails(err);
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
   console.log(details);

    fetch(`http://localhost:5000/playerstats/editPlayerInfo/ad?${playerName}`, {
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
    setPlayerDetails({ ...details, ["name"]: e.target.value });
  };

  const DOBHandler = (e) => {
    setPlayerDetails({ ...details, ["DOB"]: e.target.value });
  };
  const photoURLHandler = (e) => {
    setPlayerDetails({ ...details, ["photoURL"]: e.target.value });
  };
  const birthPlace = (e) => {
    setPlayerDetails({ ...details, ["birthPlace"]: e.target.value });
  };
  const careerHandler = (e) => {
    setPlayerDetails({ ...details, ["career"]: e.target.value });
  };
  const totalMatchesHandler = (e) => {
    setPlayerDetails({ ...details, ["noOfMatches"]:parseInt(e.target.value ) });
  };

  const highScoreHandler = (e) => {
    setPlayerDetails({ ...details, ["highestScore"]:parseInt(e.target.value ) });
  };

  const wicketsHandler = (e) => {
    setPlayerDetails({ ...details, ["wickets"]: parseInt(e.target.value ) });
  };
  const halfCenturiesHandler = (e) => {
    setPlayerDetails({ ...details, ["halfCenturies"]: parseInt(e.target.value ) });
  };
  const CenturiesHandler = (e) => {
    setPlayerDetails({ ...details, ["centuries"]: parseInt(e.target.value )});
  };

  const averageHandler = (e) => {
    setPlayerDetails({ ...details, ["average"]:parseInt(e.target.value ) });
  };
  const birthPlaceHandler = (e) => {
    setPlayerDetails({ ...details, ["birthPlace"]: e.target.value });
  };

  return (
    <div>
      <div className="outerBoundary">
        <div className="form">
          <form onSubmit={submitHandler}>
            <div
              className="title"
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "450px",
              }}
            >
              <h3> Edit Player's Information</h3>
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
                    value={details.name}
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
                    value={details.photoURL}
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
                    value={details.noOfMatches}
                  />
                  <input
                    required
                    type="number"
                    name="playerHighestScore"
                    onChange={highScoreHandler}
                    value={details.highestScore}
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
                <button type="submit">Edit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPlayer;

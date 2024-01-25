const { where } = require("sequelize");
const Player = require("../models/playerData");



exports.playerDetails = (req, res) => {
  console.log('player')
  
};


exports.editPlayerInfo=(req,res)=>{
  console.log(req.body)
  const beforename=req.body.beforename
  const name = req.body.Name;
  const dob = req.body.DOB;
  const photoURL = req.body.photoURL;
  const birthPlace = req.body.birthPlace;
  const career = req.body.career;
  const totalMatches = req.body.totalMatches;
  const highestScore = req.body.highScore;
  const halfCenturies = req.body.halfCenturies;
  const centuries = req.body.centuries;
  const wickets = req.body.wickets;
  const average = req.body.average;
  Player.update({
    name:name,
    DOB:dob,
    photoURL:photoURL,
    birthPlace:birthPlace,
    career:career,
    noOfMatches:totalMatches,
    highestScore:highestScore,
    halfCenturies:halfCenturies,
    centuries:centuries,
    wickets:wickets,
    average:average
  },{where:{name:beforename}})
}

exports.SearchPlayer = (req, res) => {
 
  const playerName=req.query.name
  playerName.replaceAll("%20"," ")
  console.log(playerName)
  {
    Player.findOne({
      where: {
        name: playerName,
      },
    })
      .then((playerdata) => {
        if (playerdata) {
          res.json(playerdata);
        } else {
          res.json({ message: "data not found" });
        }
      })
      .catch((err) => console.log(err));
  }
};

exports.SubmitPlayerData = (req, res) => {
  console.log(req.body)

  const name = req.body.Name;
  const dob = req.body.DOB;
  const photoURL = req.body.photoUrl;
  const birthPlace = req.body.birthPlace;
  const career = req.body.career;
  const totalMatches = req.body.totalMatches;
  const highestScore = req.body.highScore;
  const halfCenturies = req.body.halfCenturies;
  const centuries = req.body.centuries;
  const wickets = req.body.wickets;
  const average = req.body.average;
    Player.create({
    name:name,
    DOB:dob,
    photoURL:photoURL,
    birthPlace:birthPlace,
    career:career,
    noOfMatches:totalMatches,
    highestScore:highestScore,
    halfCenturies:halfCenturies,
    centuries:centuries,
    wickets:wickets,
    average:average
   })
  
  }

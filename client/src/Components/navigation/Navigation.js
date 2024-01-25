import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div >
      <nav>
        <ul style={{listStyleType:'none'}}>
            <div className="navigation">
          <li >
            <NavLink style={{textDecoration:'None'}} to="/playerstats">
              <div className="btn" >Search Player</div>
            </NavLink>
          </li>
          <li>
            <NavLink style={{textDecoration:'None'}} to="/playerstats/addPlayer">
              <div className="btn">Add a Player</div>
            </NavLink>
          </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

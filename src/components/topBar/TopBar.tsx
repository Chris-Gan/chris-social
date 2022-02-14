import React from "react";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import "./topBar.scss";

const TopBar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link className="logo" to="/">
          Chris Social
        </Link>
      </div>
      <div className="topBarCenter">
        <span className="searchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </span>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <Link className="topBarLink" to="/">
            Homepage{" "}
          </Link>

          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Badge badgeContent={3} color="error" max={99}>
              <Person />
            </Badge>
          </div>
          <div className="topBarIconItem">
            <Badge badgeContent={3} color="error" max={99}>
              <Chat />
            </Badge>
          </div>
          <div className="topBarIconItem">
            <Badge badgeContent={3} color="error" max={99}>
              <Notifications />
            </Badge>
          </div>
        </div>
        <Link className="logo" to="./profile">
          <img src="/assets/person/1.jpeg" alt="" className="topBarImg" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default TopBar;

import { Badge } from "@mui/material";
import React from "react";
import { UsersInterface } from "../../utils/interfaces";
import "./online.scss";

interface OnlineProps {
  user: UsersInterface;
}

const Online: React.FC<OnlineProps> = ({ user }) => {
  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <Badge
          overlap="circular"
          variant="dot"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "limegreen",
              border: 2,
              borderColor: "#fff",
              width: 12,
              height: 12,
              borderRadius: "50%",
            },
          }}
        >
          <img
            src={user.profilePicture}
            alt=""
            className="rightBarProfileImg"
          />
        </Badge>
      </div>
      <span className="rightBarUserName">{user.username}</span>
    </li>
  );
};

export default Online;

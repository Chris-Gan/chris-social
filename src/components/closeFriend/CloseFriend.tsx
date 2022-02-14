import React from "react";
import { UsersInterface } from "../../utils/interfaces";
import "./closeFriend.scss";

interface CloseFriendProps {
  user: UsersInterface;
}
const CloseFriend: React.FC<CloseFriendProps> = ({ user }) => {
  return (
    <li className="sideBarFriend">
      <img src={user.profilePicture} alt="" className="sideBarFriendImg" />
      <span className="sideBarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;

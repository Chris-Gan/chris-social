import React from "react";
import "./rightBar.scss";
import Online from "../online/Online";
import { Users } from "../../dummyData";

interface RightBarInterfaces {
  isProfile: boolean;
}

const HomePageRightBar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <img src="assets/birthday.png" alt="" className="birthdaytImg" />
        <span className="birthdayText">
          <b>Eunice</b> and <b>2 other friends</b> have a birthday today
        </span>
      </div>
      <img src="assets/ad.png" alt="" className="rightBarAd" />
      <h4 className="rightBarTitle">Online Friends</h4>
      <ul className="rightBarFriendList">
        {Users.map((user) => (
          <Online key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

const ProfileRightBar = () => {
  return (
    <>
      <h4 className="rightBarTitle">User information</h4>
      <div className="rightBarInfo">
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">City:</span>
          <span className="rightBarInfoValue">Melbourne</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">From:</span>
          <span className="rightBarInfoValue">Malaysia</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">Relationship:</span>
          <span className="rightBarInfoValue">In a relationship</span>
        </div>
      </div>
      <div className="rightBarTitle">User friends</div>
      <div className="rightBarFollowings">
        {Users.map((item) => {
          return (
            <div key={item.id} className="rightBarFollowing">
              <img
                src={item.profilePicture}
                alt=""
                className="rightBarFollowingImg"
              />
              <span className="rightBarFollowingName">{item.username}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
const RightBar: React.FC<RightBarInterfaces> = ({ isProfile }) => {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {isProfile ? <ProfileRightBar /> : <HomePageRightBar />}
      </div>
    </div>
  );
};

export default RightBar;

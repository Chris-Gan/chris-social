import React from "react";
import RightBar from "../../components/rightBar/RightBar";
import SideBar from "../../components/sideBar/SideBar";
import TopBar from "../../components/topBar/TopBar";
import Feed from "../../components/feed/Feed";
import "./profile.scss";

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/person/7.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Chris Gan</h4>
              <span className="profileInfoDesc">Hello my friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar isProfile={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

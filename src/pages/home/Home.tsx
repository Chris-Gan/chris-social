import React from "react";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightBar/RightBar";
import SideBar from "../../components/sideBar/SideBar";
import TopBar from "../../components/topBar/TopBar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar isProfile={false} />
      </div>
    </>
  );
};

export default Home;

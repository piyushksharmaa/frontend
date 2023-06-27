import React from "react";
import Sidebar from "./Sidebar";
import "../styles/Home.scss";
import pp1 from "../assets/pp1.jpg";
const Home = () => {
  return (
    <div className="Homepage">
      <div className="Homepage-sidebar">
        <Sidebar />
      </div>
      <div className="Homepage-content">
        <h1 className="Homepage-content-heading">Hello, Piyush this side!</h1>
        <p className="Homepage-content-paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ab eum
          quasi rem quidem, at esse maxime aperiam nihil? Adipisci facilis amet
          commodi ipsum iusto nisi reiciendis magni! Quod accusamus totam
          repudiandae, omnis quisquam quo enim neque quis voluptas magni!
        </p>
        <img className="Homepage-content-image" src={pp1} alt="profile"></img>
      </div>
    </div>
  );
};

export default Home;

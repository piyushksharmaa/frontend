import React from "react";
import Sidebar from "./Sidebar";
import "../styles/Information.scss";
import pp3 from "../assets/pp3.jpg";
const Information = () => {
  return (
    <div className="Information">
      <div className="Information-sidebar">
        <Sidebar />
      </div>
      <div className="Information-content">
        <h1 className="Information-content-heading">More about Me!</h1>
        <p className="Information-content-paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis id,
          numquam temporibus facere quos nostrum minima fugit blanditiis neque
          nesciunt reiciendis eligendi, doloremque alias tempore distinctio
          eveniet natus accusantium nemo ea quisquam est vel unde enim.
          Possimus, ducimus, veniam inventore dolores consequuntur quos iusto
          sint dolorem blanditiis mollitia eveniet odit ratione laboriosam saepe
          quis atque aliquam, illum quia nulla aut. Aliquam cupiditate officiis
          voluptates ad fugit voluptas rerum asperiores totam itaque repellendus
          dignissimos illum quidem sed a minus commodi numquam odio molestiae
          hic ea quia animi, tempora obcaecati deserunt! Eos nemo libero sed
          consequuntur assumenda tempore unde amet sunt aut!
        </p>
        <img
          className="Information-content-image"
          src={pp3}
          alt="profile"
        ></img>
      </div>
    </div>
  );
};

export default Information;

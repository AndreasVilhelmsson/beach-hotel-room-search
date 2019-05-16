import React from "react";
import Room from "./Room";
import notfound from "../images/notfound.png";

const RoomList = ({ room }) => {
  if (room.length === 0) {
    return (
      <div className="empty-search">
        <img src={notfound} alt="not found" />
      </div>
    );
  }
  return (
    <section className="roomsList">
      <div className="roomslist-center">
        {room.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomList;

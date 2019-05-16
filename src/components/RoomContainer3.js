import React from "react";
import RoomFilter from "./RoomFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../context";
import Loading from "./loading";

const RoomContainer = () => {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
if(loading){
  return <Loading />
}
        return (
          <div>
            hello from roomsContainer
            <RoomFilter room={rooms} />
            <RoomsList room={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomContainer;

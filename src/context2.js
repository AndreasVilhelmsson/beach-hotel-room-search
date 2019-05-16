import React, { useState, useEffect } from "react";
//import { add } from "./Helpfunctions/math";
import items from "./data";

//console.log(add(16, 26));
const RoomContext = React.createContext("light");

function RoomProvider() {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setsortedRooms] = useState([]);
  const [featuredRooms, setfeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  //getData

  useEffect(() => {
    //this.getData
    let rooms = formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    setRooms(rooms);
    setfeaturedRooms(featuredRooms);
    setsortedRooms(rooms);
    setLoading(false);
  }, []);

  const formatData = items => {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };
  return (
    <RoomContext.Provider
      value={{ rooms, featuredRooms, sortedRooms, loading }}
    >
      {this.props.children}
    </RoomContext.Provider>
  );
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

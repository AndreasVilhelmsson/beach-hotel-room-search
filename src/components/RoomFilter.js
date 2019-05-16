import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/title";

// get unique values
// Set only accepts unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = ({ room }) => {
  const context = useContext(RoomContext);
  const {
    handleChangeHandler,
    loading,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // get unique types
  let types = getUnique(room, "type");

  // add all to types
  types = ["all", ...types];
  // map all types
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(room, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />

      <form className="filter-form">
        {/* select type of bed*/}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChangeHandler}
          >
            {types}
          </select>
        </div>
        {/* Number of Guests*/}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChangeHandler}
          >
            {people}
          </select>
        </div>
        {/* End of Guests*/}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price {price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            className="form-control"
            onChange={handleChangeHandler}
          />
        </div>
        {/*end of room price */}
        {/* size of room*/}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <input
            type="number"
            name="minSize"
            id="size"
            value={minSize}
            className="size-input"
            onChange={handleChangeHandler}
          />
          <input
            type="number"
            name="maxSize"
            id="size"
            value={maxSize}
            className="size-input"
            onChange={handleChangeHandler}
          />
        </div>
        {/* end size of room*/}
        {/*extra* choises from checkboxes*/}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChangeHandler}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChangeHandler}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomFilter;

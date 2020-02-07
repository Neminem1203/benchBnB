import React from "react";
export default (props) =>{
  return (
      <li key={props.bench.id}>
        <h4>Id: {props.bench.id}</h4>
        <h4>Description: {props.bench.description}</h4>
        <h4>Seats: {props.bench.seats}</h4>
        <h4>Coordinates: {props.bench.lat}, {props.bench.lng}</h4>
      </li>
  );
};
import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <sectiion>
      <div className="title">
        <h2>ours tours </h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </sectiion>
  );
};

export default Tours;

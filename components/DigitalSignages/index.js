import React from "react";
import SignageProduct from "./signageProduct";


const DigitalSignages = ({ events }) => {
  const allEvents = [...events.eventsOne, ...events.eventsTwo];

  return (
    <div className="signages">
      <SignageProduct event={allEvents[0]} />
    </div>
  );
};

export default DigitalSignages;

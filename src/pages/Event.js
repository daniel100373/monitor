import React, { useState, useEffect } from "react";
import axios from "axios";
import EventPicture from "../components/EventPicture";

const ip = "192.168.97.121"; // wait to change to ai server

const Event = () => {
  const [Event, setEvent] = useState([]);
  const url = `http://${ip}:5000/images`;

  const getEvent = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setEvent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getEvent(url);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 style={{ color: "black" }}>Event</h1>
      <div className="pictures">
        {Event &&
          Event.map((d, index) => {
            return <EventPicture data={d} />;
          })}
      </div>
    </div>
  );
};

export default Event;

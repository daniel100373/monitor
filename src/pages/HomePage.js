import React, { useState } from "react";
import useSWR from "swr";
import Picture from "../components/Picture";

const Homepage = () => {
  const ip = "192.168.97.167"; //wait to change to local ip

  const [camera, setCamera] = useState(0);
  const search = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    console.log(parsedData);
    return parsedData;
  };
  const severUrl = `http://${ip}:4138/monitor`;
  function RefetchOnInterval() {
    const { data } = useSWR(severUrl, search, {
      refreshInterval: 100,
      //suspense: true,
    });
    //console.log(data);
    return (
      <div style={{ minHeight: "100vh" }}>
        <div className="pictures">
          {data &&
            data.map((d, index) => {
              return <Picture data={d.img} camera={index + 1} />;
            })}
        </div>
      </div>
    );
  }
  return (
    <div>
      <RefetchOnInterval />
    </div>
  );
};

export default Homepage;

import React, { useState } from "react";
import useSWR from "swr";
import Picture from "../components/Picture";

const Homepage = () => {
  const ACCESS_KEY = "PctaGARLc8v0vUVha6l5dAlkkKzmEYFq61f-JZxFYrg";
  const initialUrl = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=3`;
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

  function RefetchOnInterval() {
    const { data } = useSWR(initialUrl, search, {
      refreshInterval: 5000,
      //suspense: true,
    });
    //console.log(data);
    return (
      <div style={{ minHeight: "100vh" }}>
        <div className="pictures">
          {data &&
            data.map((d, index) => {
              return <Picture data={d.urls.full} camera={index + 1} />;
            })}
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* <Suspense maxDuration={6000} fallback={<div style={{ color: "#fff" }}>Loading...</div>}> */}
      <RefetchOnInterval />
      {/* </Suspense> */}
    </div>
  );
};

export default Homepage;

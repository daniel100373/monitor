import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Picture from "../components/Picture";

const Homepage = () => {
  //const [data, setData] = useState(null);
  const [camera, setCamera] = useState(1);
  const [page, setPage] = useState(1);
  const auth = "563492ad6f91700001000001b7c211378ea84953aa7ceb6ef5f045c9";
  const ACCESS_KEY = "PctaGARLc8v0vUVha6l5dAlkkKzmEYFq61f-JZxFYrg";
  const initialUrl = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=3`;
  const search = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        //mode: "cors",
        Accept: "application/json",
        //Authorization: auth,
      },
    });
    //setPage((currentPage) => currentPage + 1);
    let parsedData = await dataFetch.json();
    //setData(parsedData.photos);
    console.log(parsedData);
    return parsedData;
  };

  //   useEffect(() => {

  //   }, [page]);

  function RefetchOnInterval() {
    const { data } = useSWR(initialUrl, search, {
      refreshInterval: 100000,
    });
    //console.log(data);
    return (
      <div style={{ minHeight: "100vh" }}>
        <div className="pictures">
          {data &&
            data.map((d, index) => {
              return <Picture data={d} camera={index + 1} />;
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

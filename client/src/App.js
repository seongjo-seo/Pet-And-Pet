import React, { useState, useEffect } from "react";

import axios from "axios";

import "./App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/data")
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Pet and Pet</h1>
      {data ? (
        <div>
          <p>{data.message}</p>
          <img src={data.image} alt="cute pet" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;

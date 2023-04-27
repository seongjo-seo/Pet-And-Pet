const express = require("express");
const path = require("path");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// test 데이터
const data = { name: "test", age: 200 };

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/** React 클라이언트의 API 호출 경로 */
app.get("/api/data", (req, res) => {
  axios
    .get("http://localhost:8000/data")
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Internal Server Error");
    });
});

// 데이터를 JSON 형태로 반환하는 엔드포인트
// app.get("/data", (req, res) => {
//   res.json(data);
// });

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

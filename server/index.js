const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// public 폴더를 정적 파일 디렉토리로 설정
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/data", (req, res) => {
  axios
    .get("http://localhost:3000/data")
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Internal Server Error");
    });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

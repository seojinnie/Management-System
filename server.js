const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "홍길동",
      birthday: "971210",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "박서진",
      birthday: "971210",
      gender: "남자",
      job: "개발자",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "박유빈",
      birthday: "971210",
      gender: "남자",
      job: "디자이너",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

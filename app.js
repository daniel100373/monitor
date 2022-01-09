const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require("fs");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
const Camera = require("./models/camera");
const Event = require("./models/event");
var cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

mongoose
  .connect("mongodb://localhost:27017/pi")
  .then(() => {
    console.log("Connected to mongodb.");
  })
  .catch((e) => {
    console.log(e);
  });
app.set("view engine", "ejs");

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});
app.get("/avatar", (req, res) => {
  res.render("avatar");
});
app.get("/monitor", async (req, res) => {
  try {
    //const query = Camera.where({ name: "2" });
    await Camera.find({ name: "1" })
      .then((data) => {
        res.send(data);
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    console.log(e);
  }
});

app.post("/avatar", async function (req, res) {
  try {
    let { img, name } = req.body;

    //console.log(req.body);
    //var img = fs.readFileSync(req.body.path);
    //var encode_image = img.toString("base64"); //將圖片做base64編碼
    // await Camera.updateOne({ name: data.name }, { image: encode_image }, (err, res) => {
    //   if (err) throw err;
    // });
    //console.log(encode_image);

    let result = await Camera.updateOne({ name: name }, { img: img }, { new: true });
    console.log(result);
    res.send("success");

    //await console.log("avatar inserted");
  } catch (err) {
    console.log(err);
  }
});

// app.post("updateNew", async (req, res) => {
//   try {
//     let name = req.body.name;
//     let newEvent = Event.findOne({ name: name }).then((data) => {});
//     Event.updateMany({});
//   } catch (err) {
//     next(err);
//   }
// });

app.listen(4138, () => {
  console.log("server is running on 4138");
});

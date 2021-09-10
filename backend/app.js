var express = require("express");
var app = express();
// app.use(express.json());
var fs = require("fs");
var base64ToImage = require("base64-to-image");
var spawn = require("child_process").spawn;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

var cors = require("cors");
app.use(cors());

const port = 3003;
// function between(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// app.post("/userInfo", async (req, res) => {
//   console.log(req.body);
// });

app.post("/faceregister", async (req, res) => {
  var base64Str = await req.body;
  // console.log(base64Str)
  // console.log(base64Str.imageUel);
  // console.log(base64Str.name);
  // console.log(base64Str.email);
  base64Data = base64Str.imageUrl;
  var path = "./Knowimages/";
  var optionalObj = { fileName: `${base64Str.name}`, type: "png" };

  base64ToImage(base64Data, path, optionalObj);

  var imageInfo = base64ToImage(base64Data, path, optionalObj);

  res.send(imageInfo);
});

app.post("/facelogin", async (req, res) => {
  var base64Str = await req.body;
  // console.log(base64Str.imageUrl);
  base64Data = base64Str.imageUrl;
  var path = "./Uknowimages/";
  var optionalObj = { fileName: `image`, type: "png" };

  base64ToImage(base64Data, path, optionalObj);

  var imageInfo = base64ToImage(base64Data, path, optionalObj);

  var process = spawn("python", ["./Login.py",false]);

  process.stdout.on("data", function (data) {
    var mystr=data.toString();
    var myjson=JSON.parse(mystr)
    console.log(myjson)
    res.send(myjson);
  });
  // res.send(imageInfo);
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});

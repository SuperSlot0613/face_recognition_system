var express = require("express");
var app = express();
// app.use(express.json());
var fs = require("fs");
var base64ToImage = require("base64-to-image");
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

var cors = require("cors");
app.use(cors());

const port = 3003;
function between(min,max){
  return Math.floor(
    Math.random()*(max-min)+min
  )
}

app.post("/faceregister", async (req, res) => {
  var base64Str = await req.body;
  console.log(base64Str.imageUrl);
  base64Data=base64Str.imageUrl
  var path = './Knowimages/';
  var optionalObj = { fileName: `${between(1,1000)}`, type: "png" };

  base64ToImage(base64Data,path,optionalObj);

  var imageInfo = base64ToImage(base64Data,path,optionalObj);

  res.send(imageInfo);
});

app.post("/facelogin", async (req, res) => {
  var base64Str = await req.body;
  console.log(base64Str.imageUrl);
  base64Data=base64Str.imageUrl
  var path = './Uknowimages/';
  var optionalObj = { fileName: `image`, type: "png" };

  base64ToImage(base64Data,path,optionalObj);

  var imageInfo = base64ToImage(base64Data,path,optionalObj);

  res.send(imageInfo);
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});

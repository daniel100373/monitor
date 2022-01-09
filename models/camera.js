const mongoose = require("mongoose");

const cameraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});
const Camera = mongoose.model("Camera", cameraSchema);
module.exports = Camera;

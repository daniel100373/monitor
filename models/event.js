const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  feature: {
    type: [],
    required: true,
  },
});
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;

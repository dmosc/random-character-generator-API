import { Episode } from ".";
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  results: [Episode]
});

export default mongoose.model("Episodes", schema);

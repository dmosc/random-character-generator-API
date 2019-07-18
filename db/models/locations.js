import { Location } from ".";
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  results: [Location]
});

export default mongoose.model("Locations", schema);

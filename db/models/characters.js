import { Character } from ".";
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  results: [Character]
});

export default mongoose.model("Characters", schema);

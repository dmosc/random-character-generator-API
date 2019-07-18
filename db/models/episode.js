const mongoose = require("mongoose");
import Character from "./character";

const schema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  air_date: { type: String, required: true },
  episode: { type: String, required: true },
  characters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Character",
      required: true
    }
  ],
  created: { type: String, required: true, default: Date.now().toString() }
});

export default mongoose.model("Episode", schema);

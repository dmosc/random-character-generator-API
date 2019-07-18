const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  status: { type: String, required: true },
  species: { type: String, required: true },
  type: { type: String, required: true },
  gender: { type: String, required: true },
  origin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
    required: true
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
    required: true
  },
  image: { type: String, required: true },
  episode: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Episode",
      required: true
    }
  ],
  created: { type: String, required: true, default: Date.now().toString() }
});

export default mongoose.model("Character", schema);

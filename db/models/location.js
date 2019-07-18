const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  dimension: { type: String, required: true },
  residents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Character",
      required: true
    }
  ],
  created: { type: String, required: true, default: Date.now().toString() }
});

export default mongoose.model("Location", schema);

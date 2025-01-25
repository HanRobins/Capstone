import mongoose from "mongoose";

const trackerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  material: {
    type: String,
    required: false,
    validate: /^[A-Za-z0-9 ]*$/
  },
  inspiration: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  deadline: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  notes: {
    type: String,
    required: false,
    validate: /^[A-Za-z0-9 _.,!"'/$]*$/
  }
});

const Tracker = mongoose.model("Tracker", trackerSchema);

export default Tracker;

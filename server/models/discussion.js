import mongoose from "mongoose";
import reply from "./reply.js";

const discussionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  title: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  message: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 _.,!"'/$]*$/
  },
  replies: [reply.schema]
});

const Discussion = mongoose.model("Discussion", discussionSchema);

export default Discussion;

import mongoose from "mongoose";

const replySchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
    validate: /^[A-Za-z0-9 ]*$/
  },
  response: {
    type: String,
    required: false,
    validate: /^[A-Za-z0-9 _.,!"'/$]*$/
  }
});

const Reply = mongoose.model("Reply", replySchema);

export default Reply;

const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 250
  },
  subscribedToChannel: {
    type: String,
    required: true,
    enum: ["education", "food", "sport"],
    lowercase: true,
    default: "education"
  },
  subscriberDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});
module.exports = mongoose.model("Teacher", subscriberSchema);

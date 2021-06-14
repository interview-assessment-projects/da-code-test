const mongoose = require("mongoose");

// Define user (email sender) schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});
mongoose.model("user", userSchema);

import mongoose from "mongoose";

const plotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, maxlength: 10 },
  email: { type: String },
  location: { type: String, required: true },
  budget: { type: String, required: true },
  plotSize: { type: String },
  timeline: { type: String, required: true },
  comments: { type: String },
});

const Plot = mongoose.model("Plot", plotSchema);

export default Plot;

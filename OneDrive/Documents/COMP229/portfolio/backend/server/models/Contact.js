import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName:  { type: String, required: true, trim: true },
  email:     { type: String, required: true, trim: true, lowercase: true },
  phone:     { type: String, trim: true },
  notes:     { type: String, trim: true },
}, { timestamps: true });

export default mongoose.model("Contact", contactSchema);
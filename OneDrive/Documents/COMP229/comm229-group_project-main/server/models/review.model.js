import mongoose from "mongoose";
import crypto from "crypto";
//const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required",
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("Review", ReviewSchema);

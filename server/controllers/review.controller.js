import Review from "../models/review.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./../helpers/dbErrorHandler.js";
import formidable from "formidable";
import fs from "fs";
const create = (req, res) => {
  let form = formidable({ keepExtensions: true });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(400).json({
        message: "Image could not be uploaded",
      });
    }
    Object.keys(fields).forEach((key) => (fields[key] = fields[key][0]));
    Object.keys(files).forEach((key) => (files[key] = files[key][0]));
    let review = new Review(fields);
    review.product = req.product;
    review.owner = req.profile;
    if (files.image) {
      review.image.data = fs.readFileSync(files.image.filepath);
      review.image.contentType = files.image.mimetype;
    }
    try {
      let result = await review.save();
      res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  });
};
const reviewByID = async (req, res, next, id) => {
  try {
    let review = await Review.findById(id).populate("owner", "_id name").exec();
    if (!review)
      return res.status("400").json({
        error: "Review not found",
      });
    req.review = review;
    next();
  } catch (err) {
    return res.status("400").json({
      error: "Could not retrieve review",
    });
  }
};
const photo = (req, res, next) => {
  if (req.review.image.data) {
    res.set("Content-Type", req.review.image.contentType);
    return res.send(req.review.image.data);
  }
  next();
};
const defaultPhoto = (req, res) => {
  return null;
};
const read = (req, res) => {
  req.review.image = undefined;
  return res.json(req.review);
};
const update = (req, res) => {
  let form = formidable({ keepExtensions: true });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(400).json({
        message: "Photo could not be uploaded",
      });
    }
    Object.keys(fields).forEach((key) => (fields[key] = fields[key][0]));
    Object.keys(files).forEach((key) => (files[key] = files[key][0]));
    let review = req.review;
    review = extend(review, fields);
    review.updated = Date.now();
    if (files.image) {
      review.image.data = fs.readFileSync(files.image.filepath);
      review.image.contentType = files.image.minetype;
    }
    try {
      let result = await review.save();
      res.json(result);
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  });
};
const remove = async (req, res) => {
  try {
    let review = req.review;
    let deletedReview = await Review.deleteOne({ _id: shop._id });
    res.json(deletedReview);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const list = async (req, res) => {
  try {
    let reviews = await Shop.find().populate("owner", "_id name");
    res.json(reviews);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const listByProduct = async (req, res) => {
  try {
    let reviews = await Review.find({ product: req.product._id }).populate(
      "owner",
      "_id name"
    );
    res.json(reviews);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const isOwner = (req, res, next) => {
  const isOwner = req.review && req.auth && req.review.owner._id == req.auth._id;
  if (!isOwner) {
    return res.status("403").json({
      error: "User is not authorized",
    });
  }
  next();
};

export default {
  create,
  reviewByID,
  photo,
  defaultPhoto,
  list,
  listByOwner,
  read,
  update,
  remove,
  isOwner,
};
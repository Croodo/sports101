const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  seourl: {
    type: String,
    require: true,
    unique: true,
  },
  heroimg: {
    type: String,
  },
  maincategory: {
    type: String,
  },
  maincategoryurl: {
    type: String,
  },
  subcategory: {
    type: String,
  },
  subcategoryurl: {
    type: String,
  },
  eventname: {
    type: String,
  },
  eventurl: {
    type: String,
  },
  title: {
    type: String,
    require: true,
  },
  headline: {
    type: String,
    require: true,
  },
  shortdesc: {
    type: String,
  },
  body: {
    type: String,
    require: true,
  },
  imgcredit: {
    type: String,
  },
  instagram: {
    type: Boolean,
  },
  twitter: {
    type: Boolean,
  },
  inlanguage: {
    type: String,
  },
  author: {
    type: Object,
  },
  datepublished: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("sports", postSchema);

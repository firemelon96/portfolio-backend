const mongoose = require("mongoose");

const introSchema = new mongoose.Schema(
  {
    welcomeText: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const aboutSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

const experienceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    technologies: {
      type: Array,
      required: true,
    },
    image: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = {
  Intro: mongoose.model("intros", introSchema),
  About: mongoose.model("abouts", aboutSchema),
  Experience: mongoose.model("experiences", experienceSchema),
  Project: mongoose.model("projects", projectSchema),
  Contact: mongoose.model("contacts", contactSchema),
};

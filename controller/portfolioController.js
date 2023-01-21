const {
  Intro,
  About,
  Experience,
  Project,
  Contact,
} = require("../models/portfolioModel");
const User = require("../models/userModel");

const getPortfolioData = async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find().sort("-period");
    const projects = await Project.find().sort("-createdAt");
    const contacts = await Contact.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      experiences: experiences,
      projects: projects,
      contacts: contacts[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateIntro = async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateAbout = async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "About Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const addExperience = async (req, res) => {
  try {
    const experience = Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Added Experience Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Deleted data successfully",
    });
  } catch (error) {
    res.status.apply(500).send(error);
  }
};

const addProject = async (req, res) => {
  try {
    const project = Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Added Project Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: project,
      success: true,
      message: "Deleted data successfully",
    });
  } catch (error) {
    res.status.apply(500).send(error);
  }
};

const updateContact = async (req, res) => {
  try {
    const contacts = await Contact.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({
      data: contacts,
      success: true,
      message: "Contact Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const adminLogin = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    user.password = "";
    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login Successfully",
      });
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getPortfolioData,
  updateIntro,
  updateAbout,
  addExperience,
  updateExperience,
  deleteExperience,
  addProject,
  updateProject,
  deleteProject,
  updateContact,
  adminLogin,
};

const router = require("express").Router();
const {
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
} = require("../controller/portfolioController");

//get all portfolio data
router.get("/get-portfolio-data", getPortfolioData);

//update intro
router.post("/update-intro", updateIntro);

//update-about
router.post("/update-about", updateAbout);

//add experirience
router.post("/add-experience", addExperience);

//update-experience
router.post("/update-experience", updateExperience);

//delete experience
router.post("/delete-experience", deleteExperience);

//add project
router.post("/add-project", addProject);

//update-project
router.post("/update-project", updateProject);

//delete project
router.post("/delete-project", deleteProject);

//update contact
router.post("/update-contact", updateContact);

//Admin login
router.post("/admin-login", adminLogin);

module.exports = router;

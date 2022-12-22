const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const dbConfig = require("./config/dbConfig");

const portfolioRoutes = require("./routes/portfolioRoutes");

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://my-portfolio-a691.onrender.com/",
    ],
  })
);

app.use("/api/portfolio", portfolioRoutes);

const port = process.env.PORT || 5000;
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

app.listen(port, () => {
  console.log("Server running on port " + port);
});

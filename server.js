const express = require("express");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const mongoose = require("mongoose");
const portfolioRoutes = require("./routes/portfolioRoutes");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://my-portfolio-avkf.onrender.com",
      "https://portfolio-frontend-rouge.vercel.app",
    ],
    credentials: true,
  })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/portfolio", portfolioRoutes);

//Routes
// app.get("/", (req, res) => {
//   res.send("MERN Homepage");
// });

const PORT = process.env.PORT || 5000;
// const path = require("path");

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
//   });
// }

// app.listen(port, () => {
//   console.log("Server running on port " + port);
// });

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    app.listen(PORT, () => {
      console.log(`Running on port: ${PORT}`);
    })
  )
  .catch((err) => console.log(err));

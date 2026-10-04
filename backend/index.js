require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("./model/UserModel");
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://zerodha-vishal.netlify.app",
      "https://zerodha-clone2-dashboard.netlify.app",
    ],
    credentials: true,
  })
);
app.use(bodyParser.json());


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.post("/signup", async (req, res) => {
  try {
    const { email, phone, password } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({
      success: true,
      message: "Signup successful",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Signup failed",
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
  { userId: user._id, email: user.email },
    JWT_SECRET,
  { expiresIn: "1h" }
);

res.json({
  success: true,
  message: "Login successful",
  token: token,
});
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
});

app.get("/verify-token", (req, res) => {

 // console.log("VERIFY TOKEN REQUEST");
//console.log("AUTH HEADER:", req.headers.authorization);
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, JWT_SECRET);

    res.json({
      success: true,
      user: decoded,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });
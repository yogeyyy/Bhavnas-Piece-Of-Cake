const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  image: String,
});

//model
const userModel = mongoose.model("user", userSchema);

//api's
app.get("/", (req, res) => {
  res.send("Server is running on " + PORT);
});

// api to get products
app.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});

//signup api
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  try {
    const data = await userModel.findOne({ email: email }).exec();

    if (data) {
      res.send({ message: "Email id already registered!", alert: false });
    } else {
      const newUser = new userModel(req.body);
      await newUser.save();
      res.send({ message: "Successfull!", alert: true });
    }
  } catch (error) {
    res.status(500).send({ message: "Error occurred during signup" });
  }
});

//signin api
app.post("/signin", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  try {
    const data = await userModel.findOne({ email: email }).exec();

    if (data) {
      const dataRes = {
        _id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        image: data.image,
      };
      res.send({ message: "Login Successfull!", alert: true, data: dataRes });
    } else {
      res.send({ message: "Email id not registered, Sign up", alert: false });
    }
  } catch (error) {
    res.status(500).send({ message: "Error occurred during signup" });
  }
});

//PRODUCT

const productSchema = mongoose.Schema({
  productImage: String,
  productName: String,
  productType: String,
  basePrice: String,
  extraPrice: String,
  productWeight: String,
  productDesc: String,
  canBeCustomized: Boolean,
});

const productModel = mongoose.model("product", productSchema);

// api to save product
app.post("/uploadproduct", async (req, res) => {
  console.log(req.body);
  const data = await productModel(req.body);
  const save = await data.save();
  res.send({ message: "Product Added Successfully!" });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT);
});

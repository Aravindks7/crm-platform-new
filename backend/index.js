import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import accountRoutes from "./routes/accountsRoutes.js";

const app = express();

app.use(bodyParser.json());

var corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/accounts", accountRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 👨‍💻✅");
});

connect("mongodb+srv://admin:47474747@cluster0.r0efhc9.mongodb.net/")
  .then(() => {
    console.log("Connected to database");

    app.listen(3011, () => {
      console.log("Server is running on port 3011");
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config({
  path: "./.env",
});
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  res.json({ username, email, password });
});

const port = process.env.PORT;
app.listen(port, (err) => {
  if (err) {
    console.error("Failed to start server: ", err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});

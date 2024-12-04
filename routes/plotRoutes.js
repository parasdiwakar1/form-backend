import express from "express";
import Plot from "../models/Plot.js";

const router = express.Router();

// POST: Submit Form
router.post("/submit", async (req, res) => {
  try {
    const newPlot = new Plot(req.body);
    await newPlot.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (err) {
    res.status(400).json({ error: "Error saving data to the database", details: err });
  }
});

// GET: Fetch All Data
router.get("/plots", async (req, res) => {
  try {
    const plots = await Plot.find();
    res.status(200).json(plots);
  } catch (err) {
    res.status(500).json({ error: "Error fetching data", details: err });
  }
});

// PUT: Update Data
router.put("/plots/:id", async (req, res) => {
  try {
    const updatedPlot = await Plot.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPlot) {
      return res.status(404).json({ message: "Plot not found" });
    }
    res.status(200).json({ message: "Data updated successfully", data: updatedPlot });
  } catch (err) {
    res.status(400).json({ error: "Error updating data", details: err });
  }
});

// DELETE: Delete Data
router.delete("/plots/:id", async (req, res) => {
  try {
    const deletedPlot = await Plot.findByIdAndDelete(req.params.id);
    if (!deletedPlot) {
      return res.status(404).json({ message: "Plot not found" });
    }
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Error deleting data", details: err });
  }
});

export default router;

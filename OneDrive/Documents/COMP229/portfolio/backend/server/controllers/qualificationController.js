import Qualification from "../models/Qualification.js";

// GET ALL
export const getQualifications = async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.status(200).json(qualifications);
  } catch (err) {
    console.error("Error fetching qualifications:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// CREATE
export const createQualification = async (req, res) => {
  try {
    const qualification = new Qualification(req.body);
    await qualification.save();
    res.status(201).json(qualification);
  } catch (err) {
    console.error("Error creating qualification:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE
export const updateQualification = async (req, res) => {
  try {
    const updatedQualification = await Qualification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedQualification) {
      return res.status(404).json({ message: "Qualification not found" });
    }

    res.status(200).json(updatedQualification);
  } catch (err) {
    console.error("Error updating qualification:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE
export const deleteQualification = async (req, res) => {
  try {
    const deletedQualification = await Qualification.findByIdAndDelete(
      req.params.id
    );

    if (!deletedQualification) {
      return res.status(404).json({ message: "Qualification not found" });
    }

    res.status(200).json({ message: "Qualification deleted" });
  } catch (err) {
    console.error("Error deleting qualification:", err);
    res.status(500).json({ message: "Server error" });
  }
};
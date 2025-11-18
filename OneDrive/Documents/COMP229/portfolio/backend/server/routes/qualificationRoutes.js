import express from "express";
import {
  getQualifications,
  createQualification,
  updateQualification,
  deleteQualification,
} from "../controllers/qualificationController.js";

import { auth, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

// GET (auth required)
router.get("/", auth, getQualifications);

// POST (admin only)
router.post("/", auth, requireAdmin, createQualification);

// PUT (admin only)
router.put("/:id", auth, requireAdmin, updateQualification);

// DELETE (admin only)
router.delete("/:id", auth, requireAdmin, deleteQualification);

export default router;
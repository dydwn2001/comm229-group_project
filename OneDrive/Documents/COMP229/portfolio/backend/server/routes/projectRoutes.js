import express from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
import { auth, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

// GET (logged-in users only)
router.get("/", auth, getProjects);

// POST (admin only)
router.post("/", auth, requireAdmin, createProject);

// PUT (admin only)
router.put("/:id", auth, requireAdmin, updateProject);

// DELETE (admin only)
router.delete("/:id", auth, requireAdmin, deleteProject);

export default router;

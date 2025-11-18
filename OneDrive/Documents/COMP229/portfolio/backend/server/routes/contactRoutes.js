import express from "express";
import {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";
import { auth, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

// GET (logged-in users only)
router.get("/", auth, getContacts);

// POST (admin only)
router.post("/", auth, createContact);

// PUT (admin only)
router.put("/:id", auth, updateContact);

// DELETE (admin only)
router.delete("/:id", auth, deleteContact);

export default router;

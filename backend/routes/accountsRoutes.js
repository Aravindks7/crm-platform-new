import express from "express";
import {
  createAccount,
  getAccountById,
  getAllAccounts,
} from "../controllers/accountsController.js";

const router = express.Router();

router.post("/", createAccount);
router.get("/:id", getAccountById);
router.get("/", getAllAccounts);

// Add other routes for accounts

export default router;

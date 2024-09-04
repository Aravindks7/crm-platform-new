const express = require("express");
const router = express.Router();
const accountsController = require("../controllers/accountsController");

router.post("/accounts", accountsController.createAccount);
router.get("/accounts", accountsController.getAllAccounts);

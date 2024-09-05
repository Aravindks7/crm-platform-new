import AccountService from "../services/accountsService.js"; // Import the AccountService

// Controller to create a new account
export const createAccount = async (req, res) => {
  try {
    const account = await AccountService.createAccount(req.body);
    res.status(201).json({ message: "Account Created Successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to fetch account by ID
export const getAccountById = async (req, res) => {
  try {
    const account = await AccountService.getAccountById(req.params.id);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to fetch all accounts
export const getAllAccounts = async (req, res) => {
  try {
    const { accounts, total, page, totalPages } = await AccountService.getAllAccounts(req.query);
    res.json({ accounts, total, page, totalPages });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



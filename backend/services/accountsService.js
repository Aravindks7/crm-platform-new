import Account from "../models/accountsModel.js";

class AccountsService {
  static async createAccount(data) {
    const { email } = data;

    // Check if email already exists
    const existingAccount = await Account.findOne({ email });
    if (existingAccount) {
      throw new Error("Email already exists");
    }

    // Create and save a new account
    const newAccount = new Account(data);
    await newAccount.save();
    return newAccount;
  }

  static async getAccountById(id) {
    return await Account.findById(id);
  }

  static async getAllAccounts(query) {
    // Add pagination or filtering if needed
    const page = parseInt(query.page, 10) || 1;
    const limit = parseInt(query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    const accounts = await Account.find().skip(skip).limit(limit);
    const total = await Account.countDocuments();
    const totalPages = Math.ceil(total / limit);

    return { accounts, total, page, totalPages };
  }
}

export default AccountsService;
const Account = require("../models/accountsModel");

exports.createAccount = async (req, res) => {
  try {
    const { email } = req.body;

    console.log("Checking email:", email);

    // Check if email already exists
    const existingLead = await Lead.findOne({ email: email });
    console.log("Existing lead:", existingLead);

    if (existingLead) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).send(newLead);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllAccounts = async (req, res) => {
  try {
    const leads = await Lead.find(); // Fetch all leads

    res.json(leads); // Return the array of leads
  } catch (error) {
    console.error("Error fetching leads:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

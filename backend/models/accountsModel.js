import mongoose from "mongoose";

// Define the schema for the Accounts collection
const accountSchema = new mongoose.Schema({
  account_name: { type: String },
  account_number: { type: String, required: true },
  website: { type: String },
  imgUrl: { type: String },
  account_site: { type: String },
  account_owner: { type: String },
  parent_account: { type: String },
  account_type: { type: String },
  industry: { type: String },
  annual_revenue: { type: String },
  employees: { type: String },
  created_by: { type: String },
  modified_by: { type: String },
  ticker_symbol: { type: String },
  ownership: { type: String },
  rating: { type: String },
  description: { type: String },
  contact_name: { type: String },
  contact_imgUrl: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  mobile: { type: String },
  department: { type: String },
  title: { type: String },
  address_information: {
    billing_street: { type: String },
    billing_city: { type: String },
    billing_state: { type: String },
    billing_code: { type: String },
    billing_country: { type: String },
    shipping_street: { type: String },
    shipping_city: { type: String },
    shipping_state: { type: String },
    shipping_code: { type: String },
    shipping_country: { type: String },
  },
});

// Create the model from the schema
const Account = mongoose.model("Account", accountSchema);

export default Account;

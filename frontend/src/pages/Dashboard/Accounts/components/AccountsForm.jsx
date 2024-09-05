import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./accountSchema";
import PropTypes from "prop-types";
import {
  CheckBoxField,
  SelectField,
  TextAreaField,
  TextInputField,
} from "../../../../components/FormFields";
import ClapSpinner from "../../../../components/ui/ClapSpinner";
import toast from 'react-hot-toast';

const AccountsForm = ({ closeModal, onSubmit }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [isSavingNew, setIsSavingNew] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  

  const handleFormSubmit = async (data, event) => {
  event.preventDefault();
  const actionType = event.nativeEvent.submitter.name;

  // Set saving states before sending request
  if (actionType === "save") {
    setIsSaving(true);
  } else if (actionType === "saveAndNew") {
    setIsSavingNew(true);
  }

  
  try {
    // Send data to server
    const response = await fetch("http://localhost:3011/accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),

    });
    
    // Handle response
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Email already exists.');
    }
    
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast.success('Data successfully saved!');
    console.log("Data successfully saved:", data);

    onSubmit(data);

    // On successful response
    if (actionType === "saveAndNew") {
      reset();
    } else {
      closeModal();
    }
  } catch (error) {
    // Handle and display error
    console.error("Error:", error.message);
    toast.error(`Error: ${error.message}`)
  } finally {
    // Reset saving states
    setIsSaving(false);
    setIsSavingNew(false);
  }
};


  return (
    <div className="relative">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="pt-20">
        <div className="overflow-y-auto max-h-[540px] p-4">
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Create Account</h2>
            <div className="w-[30%] flex items-center justify-center gap-4">
              <button
                type="submit"
                name="save"
                className="w-1/2 flex items-center justify-center text-sm bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 disabled"
                disabled={isSaving || isSavingNew}
              >
                {isSaving ? <ClapSpinner /> : "Save"}
              </button>
              <button
                type="submit"
                name="saveAndNew"
                className="w-full flex items-center justify-center text-sm bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600"
                disabled={isSaving || isSavingNew}
              >
                {isSavingNew ? <ClapSpinner /> : "Save and New"}
              </button>
              <button
                type="button"
                className="w-1/2 text-sm bg-white py-2 px-3 rounded-lg border border-gray-300 hover:border-blue-400 disabled:opacity-80"
                onClick={closeModal}
                disabled={isSaving || isSavingNew}
              >
                Cancel
              </button>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-6">Account Information</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <SelectField
              name="account_owner"
              register={register}
              label="Account Owner"
              placeholder="Select Account Owner"
              options={["Sabu John Bosco", "Option2", "Option3"]}
              errors={errors}
            />
            <SelectField
              name="ownership"
              register={register}
              label="Ownership"
              placeholder="Select Ownership"
              options={[
                "Partnership",
                "Sole Proprietorship",
                "Trust Ownership",
                "Joint Venture",
                "Cooperative", 
                "Limited Liability Company",
              ]}
              errors={errors}
            />
            <TextInputField
              name="account_name"
              register={register}
              label="Account Name"
              placeholder="Account Name"
              errors={errors}
            />
            <TextInputField
              name="fax"
              register={register}
              label="Fax"
              placeholder="Fax"
              errors={errors}
            />

            <TextInputField
              name="account_number"
              register={register}
              label="Account Number"
              placeholder="Account Number"
              errors={errors}
            />
            <SelectField
              name="industry"
              register={register}
              label="Industry"
              placeholder="Select Industry"
              options={[
                "Technology",
                "Healthcare",
                "Finance",
                "Education",
                "Retail",
                "Manufacturing",
                "Consulting",
                "Real Estate",
              ]}
              errors={errors}
            />
            <TextInputField
              name="parent_account"
              register={register}
              label="Parent Account"
              placeholder="Parent Account"
              errors={errors}
            />
            <TextInputField
              name="sic_code"
              register={register}
              label="SIC Code"
              placeholder="SIC Code"
              errors={errors}
            />
            <TextInputField
              name="account_site"
              register={register}
              label="Account Site"
              placeholder="Account Site"
              errors={errors}
            />
            <TextInputField
              name="contact_name"
              register={register}
              label="Contact Name"
              placeholder="Contact Name"
              errors={errors}
            />
            <SelectField
              name="account_type"
              register={register}
              label="Account Type"
              placeholder="Select Account Type"
              options={[
                "Vendor",
                "Revenue",
                "Expense",
                "Asset",
                "Equity",
              ]}
              errors={errors}
            />
            <TextInputField
              name="department"
              register={register}
              label="Department"
              placeholder="Department"
              errors={errors}
            />
            <SelectField
              name="employees"
              register={register}
              label="Employees"
              placeholder="Select Employees"
              options={[
                "1-10",
                "11-50",
                "50-200",
                "201-500",
                "501-1000",
                "1001-5000",
                "5001-10,000",
                "10,000+",
              ]}
              errors={errors}
            />
            <TextInputField
              name="title"
              register={register}
              label="Title"
              placeholder="Title"
              errors={errors}
            />
            <TextInputField
              name="annual_revenue"
              register={register}
              label="Annual revenue"
              placeholder="Annual revenue"
              errors={errors}
            />
            <TextInputField
              name="email"
              register={register}
              label="Email"
              placeholder="Email"
              errors={errors}
            />
            <SelectField
              name="rating"
              register={register}
              label="Rating"
              placeholder="Select Rating"
              options={["Poor", "Average", "Good"]}
              errors={errors}
            />
            <TextInputField
              name="phone"
              register={register}
              label="Phone"
              placeholder="Phone"
              errors={errors}
            />
            <TextInputField
              name="website"
              register={register}
              label="Website"
              placeholder="Website"
              errors={errors}
            />
            <TextInputField
              name="mobile"
              register={register}
              label="Mobile"
              placeholder="Mobile"
              errors={errors}
            />
            <TextInputField
              name="ticker_symbol"
              register={register}
              label="Ticker Symbol"
              placeholder="Ticker Symbol"
              errors={errors}
            />
            <TextInputField
              name="modified_by"
              register={register}
              label="Modified By"
              placeholder="Modified By"
              errors={errors}
            />
            <TextInputField
              name="created_by"
              register={register}
              label="Created By"
              placeholder="Created By"
              errors={errors}
            />
            <CheckBoxField
              name="emailOptOut"
              register={register}
              label="Email Opt Out"
              errors={errors}
            />
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-6">Address Information</h3>
            <div className="grid grid-cols-2 gap-4 gap-x-8">
              <TextInputField
                name="address_information.billing_street"
                register={register}
                label="Billing Street"
                placeholder="Billing Street"
                errors={errors}
              />
              <TextInputField
                name="address_information.shipping_street"
                register={register}
                label="Shipping Street"
                placeholder="Shipping Street"
                errors={errors}
              />
              <SelectField
                name="address_information.billing_city"
                register={register}
                label="Billing City"
                placeholder="Select Billing City"
                options={["City1", "City2", "City3"]}
                errors={errors}
              />
              <SelectField
                name="address_information.shipping_city"
                register={register}
                label="Shipping City"
                placeholder="Select Shipping City"
                options={["City1", "City2", "City3"]}
                errors={errors}
              />
              <SelectField
                name="address_information.billing_state"
                register={register}
                label="Billing State"
                placeholder="Select Billing State"
                options={["State1", "State2", "State3"]}
                errors={errors}
              />
              <SelectField
                name="address_information.shipping_state"
                register={register}
                label="Shipping State"
                placeholder="Select Shipping State"
                options={["State1", "State2", "State3"]}
                errors={errors}
              />
              <TextInputField
                name="address_information.billing_code"
                register={register}
                label="Billing Code"
                placeholder="Billing Code"
                errors={errors}
              />
              <TextInputField
                name="address_information.shipping_code"
                register={register}
                label="Shipping Code"
                placeholder="Shipping Code"
                errors={errors}
              />
              <SelectField
                name="address_information.billing_country"
                register={register}
                label="Billing Country"
                placeholder="Select Billing Country"
                options={["Country1", "Country2", "Country3"]}
                errors={errors}
              />
              <SelectField
                name="address_information.shipping_country"
                register={register}
                label="Shipping Country"
                placeholder="Select Shipping Country"
                options={["Country1", "Country2", "Country3"]}
                errors={errors}
              />
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-6">
                Description Information
              </h3>
              <TextAreaField
                name="description"
                register={register}
                label="Description"
                placeholder="Description"
                errors={errors}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

AccountsForm.propTypes = {
  closeModal: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AccountsForm;

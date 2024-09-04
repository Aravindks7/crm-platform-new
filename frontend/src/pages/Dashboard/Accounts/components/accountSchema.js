import * as z from "zod";

export const accountSchema = z.object({
  account_owner: z.string().optional(),
  account_name: z.string().min(1, { message: "Account Name is Mandatory" }),
  account_site: z.string().optional(),
  parent_account: z.string().optional(),
  account_number: z.string().min(3, { message: "Account Number is Mandatory" }),
  account_type: z.string().optional(),
  industry: z.string().optional(),
  annual_revenue: z.string().optional(),
  created_by: z.string().optional(),
  rating: z.string().optional(),
  phone: z.string().optional(),
  contact_ame: z.string().optional(),
  department: z.string().optional(),
  title: z.string().optional(),
  mobile: z.string().optional(),
  fax: z.string().optional(),
  website: z.string().optional(),
  ticker_symbol: z.string().optional(),
  ownership: z.string().optional(),
  employees: z.string().optional(),
  sicCode: z.string().optional(),
  modified_by: z.string().optional(),
  emailOptOut: z.boolean().optional(),
  email: z.string().email({ message: "Email is Required" }),
  description: z.string().optional(),
  address_information: z
    .object({
      billingStreet: z.string().optional(),
      shippingStreet: z.string().optional(),
      billingCity: z.string().optional(),
      shippingCity: z.string().optional(),
      billingState: z.string().optional(),
      shippingState: z.string().optional(),
      billingCode: z.string().optional(),
      shippingCode: z.string().optional(),
      billingcountry: z.string().optional(),
      shippingcountry: z.string().optional(),
    })
    .optional(),
});

export const schema = z.object({
  ...accountSchema.shape,
});

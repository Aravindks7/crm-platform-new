import * as z from "zod";

export const leadSchema = z.object({
  leadImage: z.string().optional(),
  leadOwner: z.string().optional(),
  firstName: z.string().min(3, { message: "First Name is Required" }),
  lastName: z.string().optional(),
  email: z.string().email({ message: "Email is Required" }),
  phone: z.string().optional(),
  mobile: z.string().optional(),
  title: z.string().optional(),
  leadSource: z.string().optional(),
  industry: z.string().optional(),
  annualRevenue: z.string().optional(),
  emailOptOut: z.boolean().optional(),
  company: z.string().optional(),
  fax: z.string().optional(),
  website: z.string().optional(),
  leadStatus: z.string().optional(),
  numberOfEmployees: z.string().optional(),
  rating: z.string().optional(),
  skypeId: z.string().optional(),
  secondaryEmail: z.string().optional(),
  twitter: z.string().optional(),
  description: z.string().optional(),
  address: z
    .object({
      street: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      zipCode: z.string().optional(),
      country: z.string().optional(),
    })
    .optional(),
});

export const schema = z.object({
  ...leadSchema.shape,
});

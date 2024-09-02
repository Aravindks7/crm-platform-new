export const leadsData = [
  {
    id: 1,
    key: "1",
    leadImage: "http://example.com/image1.jpg",
    leadOwner: "Sabu John Bosco", // Fixed name to match enum value
    firstName: "John",
    lastName: "Doe",
    email: "john.doe1@example.com",
    phone: "123-456-7890",
    mobile: "098-765-4321",
    title: "Manager",
    leadSource: "Website",
    industry: "Technology",
    annualRevenue: "$500,000",
    emailOptOut: false,
    company: "Apex Innovations Ltd.",
    fax: "123-456-7891",
    website: "http://example.com",
    leadStatus: "New",
    numberOfEmployees: "50-200",
    rating: "Hot",
    skypeId: "john.doe1",
    secondaryEmail: "john.doe1_alt@example.com",
    twitter: "@johndoe1",
    description: "Potential client for new software.",
    address: {
      street: "123 Main St",
      city: "City1",
      state: "State1",
      zipCode: "12345",
      country: "Country1",
    },
  },
  {
    id: 2,
    key: "2",
    leadImage: "http://example.com/image2.jpg",
    leadOwner: "Sabu John Bosco", // Fixed name to match enum value
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith2@example.com",
    phone: "223-456-7890",
    mobile: "298-765-4321",
    title: "Director",
    leadSource: "Email Campaign",
    industry: "Finance",
    annualRevenue: "$1,000,000",
    emailOptOut: false,
    company: "Stellar Solutions Inc.",
    fax: "223-456-7891",
    website: "http://example.com",
    leadStatus: "Contacted",
    numberOfEmployees: "201-500",
    rating: "Warm",
    skypeId: "jane.smith2",
    secondaryEmail: "jane.smith2_alt@example.com",
    twitter: "@janesmith2",
    description: "Interested in premium service package.",
    address: {
      street: "456 Elm St",
      city: "City2",
      state: "State2",
      zipCode: "67890",
      country: "Country2",
    },
  },
  {
    id: 3,
    key: "3",
    leadImage: "http://example.com/image3.jpg",
    leadOwner: "Sabu John Bosco", // Fixed name to match enum value
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson3@example.com",
    phone: "323-456-7890",
    mobile: "398-765-4321",
    title: "Consultant",
    leadSource: "Social Media",
    industry: "Healthcare",
    annualRevenue: "$750,000",
    emailOptOut: true,
    company: "Quantum Dynamics Corp.",
    fax: "323-456-7891",
    website: "http://example.com",
    leadStatus: "Open",
    numberOfEmployees: "501-1000",
    rating: "Hot",
    skypeId: "michael.johnson3",
    secondaryEmail: "michael.johnson3_alt@example.com",
    twitter: "@mjohnson3",
    description: "Looking for a long-term partnership.",
    address: {
      street: "789 Oak St",
      city: "City3",
      state: "State3",
      zipCode: "11223",
      country: "Country3",
    },
  },
];

export const leadColumnDefs = [
    {
      field: "fullName",
      headerName: "Lead Name",
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: 280,
      valueGetter: (params) =>
        `${params.data.firstName || ""} ${params.data.lastName || ""}`.trim(),
    },
    { field: "email", headerName: "Email" },
    { field: "phone", headerName: "Phone" },
    { field: "mobile", headerName: "Mobile" },
    { field: "title", headerName: "Title" },
    { field: "leadSource", headerName: "Lead Source" },
    { field: "industry", headerName: "Industry" },
    { field: "company", headerName: "Company" },
    { field: "leadStatus", headerName: "Status" },
    { field: "rating", headerName: "Rating" },
    {
      field: "address.street",
      headerName: "Street",
      valueGetter: (params) => params.data.address?.street || "",
    },
    {
      field: "address.city",
      headerName: "City",
      valueGetter: (params) => params.data.address?.city || "",
    },
    {
      field: "address.state",
      headerName: "State",
      valueGetter: (params) => params.data.address?.state || "",
    },
    {
      field: "address.zipCode",
      headerName: "Zip Code",
      valueGetter: (params) => params.data.address?.zipCode || "",
    },
    {
      field: "address.country",
      headerName: "Country",
      valueGetter: (params) => params.data.address?.country || "",
    },
  ];
  

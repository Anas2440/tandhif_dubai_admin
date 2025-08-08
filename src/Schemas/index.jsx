import * as yup from "yup";

export const LoginSchemas = yup.object({
  Email: yup
    .string()
    .email("Email Must Be Valid Email")
    .required("Email is Required"),

  Password: yup.string().required("Password is Required "),
});

export const ForgotPasswordSchemas = yup.object({
  email: yup
    .string()
    .email("Email is must be valid")
    .required("Email is required"),
});

export const ChangePasswordSchemas = yup.object({
  CurrentPassword: yup
    .string()
    .min(4)
    .required("Please Enter  Current Password"),
  NewPassword: yup.string().min(4).required("Please Enter Your Password"),
  ConfirmNewPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("NewPassword"), null], "Password Must Match"),
});

export const AddSocialSchemas = yup.object({
  url: yup.string().required(" Link is Required "),
  Name: yup.string().required("Name is Required "),
});

export const AddCarSchemas = yup.object({
  url: yup.string().required(" Link is Required "),
  Name: yup.string().required("Name is Required "),
});

export const AddColorSchemas = yup.object({
  favcolor: yup.string().required("  color is Required "),
  ColorName: yup.string().required(" Color Name is Required "),
});

export const AddFeatersSchemas = yup.object({
  Features: yup.string().required("  Features is Required "),
});

export const AddYearSchemas = yup.object({
  Year: yup.string().required("  Year is Required "),
});

export const LinkSchemas = yup.object({
  Url: yup.string().required("Link is Required "),
});

export const AddCarModelSchemas = yup.object({
  Name: yup.string().required("Name is Required "),
  bodytype: yup.string().required("Body type is Required "),
  enginepower: yup.string().required("Engine power is Required "),
  fuel: yup.string().required("Fuel  is Required "),
  category: yup.string().required("Category  is Required "),
  zero_to_hundred: yup.string().required("Zero to hundred  is Required "),

  doors: yup.string().required("Doors is Required "),
  topspeed: yup.string().required("Top speed is Required "),
  seats: yup.string().required("Seats is Required "),
});
export const NotificationSchemas = yup.object({
  Title: yup.string().required("Title  is Required "),
  Description: yup.string().required("Message  is Required "),
});

export const AddAdminSchemas = yup.object({
  email: yup
    .string()
    .email("Email Must Be Valid Email")
    .required("Email is Required"),
  FullName: yup.string().required("Full Name is Required"),
  Password: yup.string().required("Password is Required"),
});
export const EditAdminSchemas = yup.object({
  email: yup
    .string()
    .email("Email Must Be Valid Email")
    .required("Email is Required"),
  FullName: yup.string().required("Full Name is Required"),
  // Password: yup.string().required("Password is Required"),
});

export const AddDestinationSchemas = yup.object({
  description: yup.string().required("Description is Required"),
  FullName: yup.string().required("Full Name is Required"),
  Address: yup.string().required("Address is Required"),
  // lat: yup.string().required("Address is Required"),
  // long: yup.string().required("Address is Required"),
});

export const AddBadgeSchemas = yup.object({
  description: yup.string().required("Description is Required"),
  FullName: yup.string().required("Full Name is Required"),
  // Address: yup.string().required("Address is Required"),
  // lat: yup.string().required("Address is Required"),
  // long: yup.string().required("Address is Required"),
});

export const AddCouponSchemas = yup.object({
  description: yup.string().required("Description is Required"),
  FullName: yup.string().required("Name is Required"),
  discount: yup.string().required("Discount is Required"),
  expiryDate: yup.string().required("Expiry Date is Required"),
});

export const AddActivitySchemas = yup.object({
  description: yup.string().required("Description is Required"),
  FullName: yup.string().required("Full Name is Required"),
  Address: yup.string().required("Address is Required"),
  type: yup.string().required("type is Required"),
  category: yup.string().required("Category is Required"),
  startDate: yup.string().required("Start Date is Required"),
  endDate: yup.string().required("End Date is Required"),
  Time: yup.string().required("Time is Required"),
  ticketPrice: yup.string().required("Ticket Price is Required"),
});

export const AddRestaurantSchemas = yup.object({
  description: yup.string().required("Description is Required"),
  FullName: yup.string().required("Full Name is Required"),
  Address: yup.string().required("Address is Required"),
  // type: yup.string().required("type is Required"),
  operationalDays: yup.string().required("Operational Days is Required"),
  price: yup.string().required("Price is Required"),
});

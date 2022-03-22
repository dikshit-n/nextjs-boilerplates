import { yup } from "@/utils";

// auth
export const emailAuthenticationSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  // password: yup.string().password().required("Password is required"),
  password: yup.string().required("Password is required"),
});

export const phoneNumberAuthenticationSchema_1 = yup.object().shape({
  phoneNumber: yup
    .string()
    .phone("Invalid Phone")
    .required("Phone Number is required"),
});
export const phoneNumberAuthenticationSchema_2 = yup.object().shape({
  phoneNumber: yup
    .string()
    .phone("Invalid Phone")
    .required("Phone Number is required"),
  otp: yup.string().required("OTP is required"),
});
export const patientSignupSchema = yup.object().shape({
  _id: yup.string(),
  name: yup.string().required("Name is required"),
  age: yup.number().required("Age is required").min(1, "Invaild Age"),
  sex: yup.string().required("Sex is required").nullable(),
  bloodGroup: yup.string().required("Blood Group is required").nullable(),
  address: yup.string().required("Address is required"),
  phoneNumber: yup
    .string()
    .phone("Invalid Phone Number")
    .required("Phone Number is required"),
  emiratesId: yup.string().required("Emirates ID is required"),
  insuranceNumber: yup.string(),
  email: yup.string().email("Invalid Email").required("Email is required"),
});

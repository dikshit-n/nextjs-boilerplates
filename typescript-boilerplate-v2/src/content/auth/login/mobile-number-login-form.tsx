import { CustomButton, JustifyBetween, RecursiveContainer } from "@/components";
import { CONFIG_TYPE } from "@/model";
import {
  phoneNumberAuthenticationSchema_1,
  phoneNumberAuthenticationSchema_2,
} from "@/schema";
import { Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { filterNumbers, getError } from "@/utils";
import { useAuth } from "@/hooks";

export const MobileNumberLoginForm: React.FC = () => {
  const [isEnteredMobileNumber, setIsEnteredMobileNumber] = useState(false);
  const schema = !isEnteredMobileNumber
    ? phoneNumberAuthenticationSchema_1
    : phoneNumberAuthenticationSchema_2;

  const [loggingIn, setLoggingIn] = useState(false);
  const [sendingOTP, setSendingOTP] = useState(false);
  const { login, sendOTP } = useAuth();

  const handleSubmit = async (submitData: any) => {
    // check for otp verification
    if (!submitData.otp) {
      setSendingOTP(true);
      try {
        await sendOTP(submitData);
        setIsEnteredMobileNumber(true);
        window.flash({ message: "OTP sent successfully" });
      } catch (err) {
        console.log("err");
        window.flash({ message: getError(err).message, variant: "error" });
      }
      setSendingOTP(false);
      return;
    }

    // then login the user
    setLoggingIn(true);
    submitData = {
      ...submitData,
      otp: filterNumbers(submitData.otp),
    };
    try {
      await login(submitData);
    } catch (err) {
      console.log("err");
      window.flash({ message: getError(err).message, variant: "error" });
    }
    setLoggingIn(false);
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      otp: "",
    },
    onSubmit: handleSubmit,
    validationSchema: schema,
  });

  const fields: CONFIG_TYPE = [
    {
      name: "phoneNumber",
      label: "Phone Number",
      type: "phone",
    },
    isEnteredMobileNumber
      ? {
          name: "otp",
          label: "OTP",
          type: "masked-text",
          autoFocus: true,
          containerProps: {
            mask: "9 9 9 9 9 9",
          },
        }
      : {
          type: "component",
          component: (
            <CustomButton
              type="submit"
              sx={{ display: "block", mx: "auto" }}
              loading={sendingOTP}
              color="success"
            >
              Send OTP
            </CustomButton>
          ),
        },
  ];

  return (
    <>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Login with Phone Number
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <RecursiveContainer
          config={fields}
          formik={formik}
          validationSchema={schema}
        />
        <JustifyBetween sx={{ mt: 1, flexWrap: "wrap", gap: 1 }}>
          {isEnteredMobileNumber && (
            <CustomButton loading={loggingIn} color="success" type="submit">
              Login
            </CustomButton>
          )}
          {/* <CustomButton linkStyle>Forgot Password ?</CustomButton> */}
        </JustifyBetween>
      </form>
    </>
  );
};

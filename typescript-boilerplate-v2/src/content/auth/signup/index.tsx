import StepWizard from "react-step-wizard";
import { Box, styled, Card } from "@mui/material";
import { SignupForm } from "./signup-form";
import { OTPVerificationForm } from "./phone-number-form";
import { useState } from "react";

const SignupPageWrapper = styled(StepWizard)`
  & > div,
  & > div > div,
  & {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    display: grid;
    place-items: center;
    background-color: lightblue;
  }
`;

// const StepWizardWrapper = styled(StepWizard)`
//   width: 100vw;
//   height
// `

const SignupCardWrapper = styled(Card)(
  ({ theme }) => `
    width: 90%;
    height: fit-content;
    min-height: 200px;
    padding: 30px;
    display: flex;
    gap: 10px;
    .image {
        display: block;
        background-size: 100% auto;
        background-position: center;
        // background-attachment: fixed;
        background-repeat: no-repeat;
        background-image: url("/img/app-logo.png");
        width: 40%;
        border-right: 1px solid lightgrey;
    }
    ${theme.breakpoints.down("sm")} {
        .image {
            display: none;
        }
        .signup-form {
          width: 100% !important; 
        }
    }
    .signup-form {
        display: flex;
        flex-direction: column;
        width: 60%;
    }
`
);

export const SignupContent: React.FC = () => {
  const [detailsAfterOTPVerification, setDetailsAfterOTPVerification] =
    useState(null);

  const saveDetails = (details) => setDetailsAfterOTPVerification(details);

  return (
    <SignupPageWrapper isLazyMount>
      <SignupCardWrapper sx={{ maxWidth: "600px" }}>
        <Box className="image" />
        <Box className="signup-form">
          <OTPVerificationForm saveDetails={saveDetails} />
        </Box>
      </SignupCardWrapper>
      <SignupForm initialDetails={detailsAfterOTPVerification} />
    </SignupPageWrapper>
  );
};

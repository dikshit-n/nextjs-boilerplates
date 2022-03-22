import { Card, Grid, styled, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { MobileNumberLoginForm } from "./mobile-number-login-form";
import { EmailLoginForm } from "./email-login-form";
import { CustomButton } from "@/components";
import { AppLogoSrc } from "@/data";

const LoginPageWrapper = styled(Grid)`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: grid;
  place-items: center;
  background-color: lightblue;
`;

const LoginCardWrapper = styled(Card)(
  ({ theme }) => `
    width: 90%;
    max-width: 600px;
    height: fit-content;
    min-height: 200px;
    padding: 30px;
    display: flex;
    gap: 10px;
    .image {
        display: block;
        background-size: 100% auto;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("${AppLogoSrc}");
        width: 40%;
        border-right: 1px solid lightgrey;
    }
    ${theme.breakpoints.down("sm")} {
        .image {
            display: none;
        }
        .login-form {
          width: 100% !important; 
        }
    }
    .login-form {
        display: flex;
        flex-direction: column;
        width: 60%;
    }
`
);

export const LoginContent: React.FC = () => {
  const [emailLogin, setEmailLogin] = useState(true);

  return (
    <LoginPageWrapper container>
      <LoginCardWrapper>
        <Box className="image" />
        <Box className="login-form">
          {emailLogin ? <EmailLoginForm /> : <MobileNumberLoginForm />}
          <Divider component="div" flexItem variant="middle" sx={{ my: 2 }}>
            <CustomButton
              linkStyle
              href="/auth/signup"
              sx={{ textTransform: "none" }}
            >
              Create a Patient account
            </CustomButton>
          </Divider>
          <CustomButton
            sx={{ borderRadius: 5 }}
            onClick={() => setEmailLogin((prev) => !prev)}
          >
            Login with {emailLogin ? "Phone number" : "Email"}
          </CustomButton>
        </Box>
      </LoginCardWrapper>
    </LoginPageWrapper>
  );
};

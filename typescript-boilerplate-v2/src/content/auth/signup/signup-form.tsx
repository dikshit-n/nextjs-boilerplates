import { useAuth } from "@/hooks";
import { useState } from "react";
import { useFormik } from "formik";
import { CONFIG_TYPE, SIGNUP_PROPS } from "@/model";
import { getError } from "@/utils";
import { AppLogoSrc, bloodGroups } from "@/data";
import { CustomButton, RecursiveContainer } from "@/components";
import { patientSignupSchema } from "@/schema";
import { Grid, styled } from "@mui/material";

const SignupFormWrapper = styled(Grid)(
  ({ theme }) => `
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  .signup-form {
    padding: ${theme.spacing(2)} ${theme.spacing(4)};
    background-color: ${theme.palette.background.paper};
    & > img {
      width: 200px;
      height: auto;
      margin: 20px auto;
      display: block;
    }
  }
  .image {
    display: block;
    background-size: 80% auto;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("${AppLogoSrc}");
  }
  ${theme.breakpoints.down("sm")} {
    & {
      grid-template-columns: 100% !important;
    }
    .image {
      display: none;
    }
    .signup-form {
      width: 100% !important;
    }
  }
`
);

const RowWrapper = styled((props: any) => (
  <Grid container spacing={2} {...props} />
))`
  display: ;
`;

const FormElementContainer = (props: any) => (
  <Grid item xs={12} sm={6} {...props} />
);

export const SignupForm: React.FC<{
  initialDetails: object | null | undefined;
}> = (props) => {
  const [siginingup, setSigningup] = useState(false);
  const { signup } = useAuth();

  const handleSubmit = async (submitData: SIGNUP_PROPS) => {
    setSigningup(true);
    try {
      await signup(submitData);
    } catch (err) {
      window.flash({ message: getError(err).message, variant: "error" });
    }
  };

  const formik = useFormik({
    initialValues: {
      _id: "",
      name: "",
      age: "",
      sex: null,
      bloodGroup: "",
      address: "",
      phoneNumber: "",
      emiratesId: "",
      insuranceNumber: "",
      email: "",
      ...props.initialDetails,
    },
    onSubmit: handleSubmit,
    validationSchema: patientSignupSchema,
  });

  const section_1: CONFIG_TYPE = [
    {
      name: "name",
      label: "Name",
      container: FormElementContainer,
    },
    {
      name: "age",
      label: "Age",
      type: "number",
      container: FormElementContainer,
    },
  ];

  const section_2: CONFIG_TYPE = [
    {
      name: "sex",
      type: "radio-multiple",
      label: "Sex",
      asObject: false,
      children: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
      ],
      container: FormElementContainer,
    },
    {
      name: "bloodGroup",
      label: "Blood Group",
      type: "select",
      options: bloodGroups,
      isString: true,
      placeholder: "Choose Blood Group",
      container: FormElementContainer,
    },
  ];

  const section_3: CONFIG_TYPE = [
    {
      name: "address",
      label: "Address",
      type: "text",
      multiline: true,
      rows: 2,
      maxRows: 4,
    },
  ];

  const section_4: CONFIG_TYPE = [
    {
      name: "emiratesId",
      label: "Emirates ID",
      container: FormElementContainer,
    },
    {
      name: "insuranceNumber",
      label: "Insurance Number",
      container: FormElementContainer,
    },
  ];

  const section_5: CONFIG_TYPE = [
    {
      name: "email",
      type: "email",
      label: "Email",
      container: FormElementContainer,
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      type: "phone",
      disabled: true,
      container: FormElementContainer,
    },
  ];

  const formProps = {
    formik,
    validationSchema: patientSignupSchema,
    formContainer: RowWrapper as any,
  };

  return (
    <SignupFormWrapper container>
      <Grid
        item
        className="signup-form"
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <img src={AppLogoSrc} alt="App logo" />
        <RecursiveContainer config={section_1} {...formProps} />
        <RecursiveContainer config={section_2} {...formProps} />
        <RecursiveContainer
          config={section_3}
          {...formProps}
          formContainer={undefined}
        />
        <RecursiveContainer config={section_4} {...formProps} />
        <RecursiveContainer config={section_5} {...formProps} />
        <CustomButton
          sx={{ display: "block", mx: "auto", px: 10, borderRadius: 5, mt: 2 }}
          type="submit"
          loading={siginingup}
        >
          Signup
        </CustomButton>
      </Grid>
      <Grid item className="image"></Grid>
    </SignupFormWrapper>
  );
};

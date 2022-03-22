import { Guest } from "@/guard";
import { NextPage } from "next";
import { SignupContent } from "@/content/auth";

const Login: NextPage = () => <SignupContent />;

Login.getLayout = (page) => <Guest>{page}</Guest>;

export default Login;

import { Guest } from "@/guards";
import { useAuth } from "@/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    console.log("Logged in");
    login({ email: "superadmin@mailinator.com", password: "test" });
    // setCookie(
    //   authSetup.token,
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWMyYTQzZjcxYWQ0ZGExNTc1MGZjNGQiLCJlbWFpbCI6InN1cGVyYWRtaW5AbWFpbGluYXRvci5jb20iLCJqd3RTZXNzaW9uIjoiMGEyMGRiODYtMWNjNC00MmJmLWI1YTctZTczOTE1MmFlYzg5Iiwicm9sZSI6WyJzdXBlcmFkbWluIl0sImlhdCI6MTY0MDUwNzQ1OX0.lv0-PSyzLMX9vx31dsUudj5_Oq2lD70_JooPI6fZWlo"
    // );
    router.push(`/${router.query.backToURL || "superadmin"}`);
  };

  return (
    <div>
      Login Page
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

Login.getLayout = (page) => <Guest>{page}</Guest>;

export default Login;

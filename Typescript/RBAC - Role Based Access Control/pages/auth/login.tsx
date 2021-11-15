import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useActions } from "../../hooks";
import { setCookie } from "../../lib";

const Login: NextPage = () => {
  const { query, push } = useRouter();
  const { loginSuccessful } = useActions();

  const login = () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTc4ZTg4NzIzODk5Zjg2MTAxNjU4MWMiLCJ0eXBlIjoiY29tcGFueSIsImlhdCI6MTYzNjk1NzA0OH0.kpPKbUtytDnkePOER9Qw4wiDGWTgEfYcvjMMkm5806A";
    loginSuccessful({ token, type: "company" });
    setCookie("token", token);
    if (query.redirectURL)
      setTimeout(() => {
        push(`${query.redirectURL || "/"}`);
      }, 2000);
    else {
      push("/");
    }
  };

  return (
    <div>
      Login Page
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;

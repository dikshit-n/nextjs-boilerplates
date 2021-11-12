import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { AppLoader } from "../components/ui";

const Logout: NextPage = () => {
  const { replace } = useRouter();
  useEffect(() => {
    replace("/login");
  }, []);

  return <AppLoader />;
};

export default Logout;

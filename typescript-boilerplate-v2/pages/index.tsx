import { authSetup, rbacSetup } from "@/data";
import { Authenticated } from "@/guards";
import { useAuth } from "@/hooks";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { CustomButton } from "@/components";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { HomePageLayout } from "@/layouts";
import { useEffect } from "react";

// either a public page / redirect to login page

const Home: NextPage = () => {
  const { data, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    if (data)
      router.replace(
        `${
          rbacSetup.homePage[data?.roles[0] as keyof typeof rbacSetup.homePage]
        }`
      );
  }, [router.isReady]);

  return <div>Loading...</div>;
};

Home.getLayout = (page) => (
  <Authenticated>
    <HomePageLayout>{page}</HomePageLayout>
  </Authenticated>
);

export default Home;

import { SuperadminDashboard } from "@/content";
import { Authenticated } from "@/guards";
import { SuperadminLayout } from "@/layouts";
import { NextPage } from "next";

const SuperadminHome: NextPage = (props) => {
  return <SuperadminDashboard />;
};

SuperadminHome.getLayout = (page) => (
  <Authenticated roles={["superadmin"]}>
    <SuperadminLayout>{page}</SuperadminLayout>
  </Authenticated>
);

export default SuperadminHome;

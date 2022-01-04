import { Authenticated } from "@/guards";
import { SuperadminLayout } from "@/layouts";
import { NextPage } from "next";

const SuperadminHome: NextPage = (props) => {
  return <div>Superadmin Home</div>;
};

SuperadminHome.getLayout = (page) => (
  <Authenticated roles={["superadmin"]}>
    <SuperadminLayout>{page}</SuperadminLayout>
  </Authenticated>
);

export default SuperadminHome;

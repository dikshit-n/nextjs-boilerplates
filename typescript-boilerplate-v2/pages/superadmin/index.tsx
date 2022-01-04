import { Authenticated } from "@/guards";
import { NextPage } from "next";

const SuperadminHome: NextPage = (props) => {
  return <div>Superadmin Home</div>;
};

SuperadminHome.getLayout = (page) => (
  <Authenticated roles={["superadmin"]}>{page}</Authenticated>
);

export default SuperadminHome;

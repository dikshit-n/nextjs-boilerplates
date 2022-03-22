import { Authenticated } from "@/guard";
import { AdminLayout } from "@/layouts";
import { NextPage } from "next";

const AdminHome: NextPage = (props) => {
  return <div>Admin Home</div>;
};

AdminHome.getLayout = (page) => (
  <Authenticated roles={["admin"]}>
    <AdminLayout>{page}</AdminLayout>
  </Authenticated>
);

export default AdminHome;

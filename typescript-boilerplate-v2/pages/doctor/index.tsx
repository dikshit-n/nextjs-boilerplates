import { DoctorDashboardContent } from "@/content/doctor";
import { Authenticated } from "@/guard";
import { DoctorLayout } from "@/layouts";
import { NextPage } from "next";

const DoctorHome: NextPage = (props) => {
  return <DoctorDashboardContent />;
};

DoctorHome.getLayout = (page) => (
  <Authenticated roles={["doctor"]}>
    <DoctorLayout>{page}</DoctorLayout>
  </Authenticated>
);

export default DoctorHome;

import { HospitalDashboardContent } from "@/content/hospital";
import { Authenticated } from "@/guard";
import { HospitalLayout } from "@/layouts";
import { NextPage } from "next";

const HospitalHome: NextPage = (props) => {
  return <HospitalDashboardContent />;
};

HospitalHome.getLayout = (page) => (
  <Authenticated roles={["hospital"]}>
    <HospitalLayout>{page}</HospitalLayout>
  </Authenticated>
);

export default HospitalHome;

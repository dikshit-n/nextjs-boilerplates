import { PatientDashboardContent } from "@/content/patient";
import { Authenticated } from "@/guard";
import { PatientLayout } from "@/layouts";
import { NextPage } from "next";

const PatientHome: NextPage = (props) => {
  return <PatientDashboardContent />;
};

PatientHome.getLayout = (page) => (
  <Authenticated roles={["patient"]}>
    <PatientLayout>{page}</PatientLayout>
  </Authenticated>
);

export default PatientHome;

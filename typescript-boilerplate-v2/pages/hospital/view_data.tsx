import { ViewDataContent } from "@/content/hospital";
import { Authenticated } from "@/guard";
import { HospitalLayout } from "@/layouts";
import { NextPage } from "next";

const ViewData: NextPage = (props) => {
  return <ViewDataContent />;
};

ViewData.getLayout = (page) => (
  <Authenticated roles={["hospital"]}>
    <HospitalLayout>{page}</HospitalLayout>
  </Authenticated>
);

export default ViewData;

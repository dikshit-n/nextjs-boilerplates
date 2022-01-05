import { ExtendedSidebarLayout } from "@/layouts";
export const AdminLayout: React.FC = (props) => {
  const { children } = props;
  // const headerLinks = {}
  // const sidebarLinks = {}

  return (
    <ExtendedSidebarLayout
    // headerLinks={headerLinks}
    // sidebarLinks={sidebarLinks}
    >
      {children}
    </ExtendedSidebarLayout>
  );
};

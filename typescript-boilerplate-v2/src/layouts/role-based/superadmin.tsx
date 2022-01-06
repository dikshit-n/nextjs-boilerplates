import { ExtendedSidebarLayout } from "@/layouts";
import { routes } from "@/routes";
export const SuperadminLayout: React.FC = (props) => {
  const { children } = props;
  // const headerLinks = {}
  // const sidebarLinks = {}

  return (
    <ExtendedSidebarLayout
      // headerLinks={headerLinks}
      sidebarRoutes={routes.superadmin}
    >
      {children}
    </ExtendedSidebarLayout>
  );
};

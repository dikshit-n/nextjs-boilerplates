import { ExtendedSidebarLayout } from "@/layouts";
import { routes } from "@/routes";
export const AdminLayout: React.FC = (props) => {
  const { children } = props;
  // const headerLinks = {}
  // const sidebarLinks = {}

  return (
    <ExtendedSidebarLayout
      // headerLinks={headerLinks}
      sidebarRoutes={routes.admin}
    >
      {children}
    </ExtendedSidebarLayout>
  );
};

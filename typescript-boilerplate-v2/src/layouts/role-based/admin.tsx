import { AccentHeaderLayout } from "@/layouts";
export const AdminLayout: React.FC = (props) => {
  const { children } = props;
  // const headerLinks = {}
  // const sidebarLinks = {}

  return (
    <AccentHeaderLayout
    // headerLinks={headerLinks}
    // sidebarLinks={sidebarLinks}
    >
      {children}
    </AccentHeaderLayout>
  );
};

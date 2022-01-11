import { authSetup } from "@/data";
import { useAuth } from "@/hooks";
import { ExtendedSidebarLayout } from "@/layouts";
import { HEADER_PROPS } from "@/model";
import { routes } from "@/routes";
import { useRouter } from "next/router";

export const SuperadminLayout: React.FC = (props) => {
  const { children } = props;
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push(authSetup.authPage);
  };

  const headerProps: HEADER_PROPS = {
    avatar: {
      image:
        "https://cdn.discordapp.com/avatars/692038003476135977/4d2acd3aab7d3dffebacae5726d2e905.webp?size=160",
      email: "sasuke_uchiha@konoha.com",
      name: "Sasuke Uchiha",
      actions: [
        {
          label: "Profile",
          href: "/superadmin/profile",
        },
      ],
      logout: handleLogout,
    },
  };

  return (
    <ExtendedSidebarLayout
      headerProps={headerProps}
      sidebarRoutes={routes.superadmin}
    >
      {children}
    </ExtendedSidebarLayout>
  );
};

import { SIDEBAR_MENU_ITEMS_STRUCTURE } from "@/model";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const superadminRoutes: SIDEBAR_MENU_ITEMS_STRUCTURE = [
  {
    heading: "General",
    items: [
      {
        label: "Profile",
        link: "/superadmin/profile",
        icon: <AccountCircleIcon />,
      },
      {
        label: "Dashboard",
        link: "/superadmin",
        icon: <LeaderboardIcon />,
      },
    ],
  },
];

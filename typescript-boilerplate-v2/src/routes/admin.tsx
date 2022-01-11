import { SIDEBAR_MENU_ITEMS_STRUCTURE } from "@/model";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const adminRoutes: SIDEBAR_MENU_ITEMS_STRUCTURE = [
  {
    heading: "General",
    items: [
      {
        label: "Profile",
        link: "/admin/profile",
        icon: <AccountCircleIcon />,
      },
      {
        label: "Dashboard",
        link: "/admin",
        icon: <LeaderboardIcon />,
      },
    ],
  },
];

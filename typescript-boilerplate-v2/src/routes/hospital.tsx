import { SIDEBAR_MENU_ITEMS_STRUCTURE } from "@/model";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const hospitalRoutes: SIDEBAR_MENU_ITEMS_STRUCTURE = [
  {
    heading: "General",
    items: [
      {
        label: "Profile",
        link: "/hospital/profile",
        icon: <AccountCircleIcon />,
      },
      {
        label: "Dashboard",
        link: "/hospital",
        icon: <LeaderboardIcon />,
      },
      {
        label: "View Data",
        link: "/hospital/view_data",
        icon: <LeaderboardIcon />,
      },
    ],
  },
];

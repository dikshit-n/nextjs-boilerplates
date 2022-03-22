import { SIDEBAR_MENU_ITEMS_STRUCTURE } from "@/model";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const patientRoutes: SIDEBAR_MENU_ITEMS_STRUCTURE = [
  {
    heading: "General",
    items: [
      {
        label: "Profile",
        link: "/patient/profile",
        icon: <AccountCircleIcon />,
      },
      {
        label: "Dashboard",
        link: "/patient",
        icon: <LeaderboardIcon />,
      },
    ],
  },
];

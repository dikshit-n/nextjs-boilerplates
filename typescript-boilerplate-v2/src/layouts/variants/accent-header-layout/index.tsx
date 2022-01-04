import { useTheme } from "@mui/material";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import Box from "@mui/material/Box";

export const AccentHeaderLayout: React.FC = (props) => {
  const { children } = props;

  const theme = useTheme();

  return (
    <>
      <Header />
      <Sidebar />
      <Box
        sx={{ position: "relative", zIndex: 0, height: theme.header.height }}
      >
        {children}
      </Box>
    </>
  );
};

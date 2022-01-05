import { useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { SidebarContext } from "@/context";

const StyledSidebar = styled(Box)(
  ({ theme }) => `
    width: ${theme.sidebar.width};
    min-width: ${theme.sidebar.width};
    background: ${theme.sidebar.background};
    height: 100vh;
    overflow: auto;
    position: relative;
    ${theme.breakpoints.down("lg")} {
      position: fixed;
      top: 0;
      left: 0;
    }
  `
);

export const Sidebar: React.FC = () => {
  const { isOpen, closeSidebar } = useContext(SidebarContext);

  return (
    <>
      <StyledSidebar
        sx={{ display: { xs: "none", lg: "inline-block" } }}
      ></StyledSidebar>
      <Drawer open={isOpen} onClose={closeSidebar}>
        <StyledSidebar></StyledSidebar>
      </Drawer>
    </>
  );
};

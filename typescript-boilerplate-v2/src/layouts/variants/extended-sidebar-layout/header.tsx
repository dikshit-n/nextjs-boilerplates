import { useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { SidebarContext } from "@/context";
import { CustomIconButton } from "@/components";
import { CUSTOM_ICON_BUTTON_PROPS } from "@/models";

const StyledHeader = styled(Box)(
  ({ theme }) => `
    height: ${theme.header.height};
    width: 100%;
    background: ${theme.header.background};

    // margin approach
    // ${theme.breakpoints.up("lg")} {
    //   width: calc(100% - ${theme.sidebar.width});
    //   margin-left: ${theme.sidebar.width};
    // }
  `
);

const ToggleSidebar = styled((props: CUSTOM_ICON_BUTTON_PROPS) => (
  <CustomIconButton {...props} />
))(
  ({ theme }) => `
    ${theme.breakpoints.up("lg")} {
      display: none;
    }
  `
);

export const Header: React.FC = (props) => {
  const { isOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <StyledHeader>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Header</Typography>
        <ToggleSidebar onClick={toggleSidebar}>
          {isOpen ? <CloseTwoToneIcon /> : <MenuTwoToneIcon />}
        </ToggleSidebar>
      </Box>
    </StyledHeader>
  );
};

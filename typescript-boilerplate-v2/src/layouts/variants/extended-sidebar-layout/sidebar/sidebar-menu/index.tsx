import { SIDEBAR_MENU_ITEMS_STRUCTURE } from "@/models";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { SidebarMenuItem } from "./sidebar-menu-item";

const SidebarMenuWrapper = styled(List)(
  ({ theme }) => `

    `
);

export const SidebarMenu: React.FC<{
  routes?: SIDEBAR_MENU_ITEMS_STRUCTURE;
}> = (props) => {
  const { routes = [] } = props;
  return (
    <>
      {routes.map((el, index) => (
        <SidebarMenuWrapper
          subheader={<ListSubheader key={index}>{el.heading}</ListSubheader>}
        >
          {(el.items || []).map((ele, ind) => (
            <SidebarMenuItem key={ind} {...ele} />
          ))}
        </SidebarMenuWrapper>
      ))}
    </>
  );
};

import { SIDEBAR_MENU_ITEM_STRUCTURE } from "@/models";
import { isActiveRoute } from "@/utils";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import ExpandLessTwoToneIcon from "@mui/icons-material/ExpandLessTwoTone";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";

export const SidebarMenuItem: React.FC<SIDEBAR_MENU_ITEM_STRUCTURE> = (
  props
) => {
  const [isOpen, setIsOpen] = useState(false);
  const { link, label, icon, items } = props;
  const router = useRouter();

  if (items) {
    return (
      <ListItem component="div">
        <Button
          startIcon={icon}
          endIcon={
            isOpen ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />
          }
          className={clsx({
            "Mui-active": isOpen,
          })}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {label}
        </Button>
        <Collapse>
          {items.map((el, index) => (
            <SidebarMenuItem key={index} {...el} />
          ))}
        </Collapse>
      </ListItem>
    );
  }

  return link ? (
    <ListItem component="div">
      <Link href={link} passHref>
        <Button
          className={clsx({
            "Mui-active": isActiveRoute({ path: router.asPath, route: link }),
          })}
          startIcon={icon}
          component="a"
          disableRipple
        >
          {label}
        </Button>
      </Link>
    </ListItem>
  ) : null;
};

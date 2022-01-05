import { IconButtonProps } from "@mui/material/IconButton";
import { ParsedUrlQueryInput } from "querystring";

// redux

// auth
export interface AUTH_DATA {
  name: string;
  email: string;
  token: string;
  // #rbac-setup
  roles: Array<string>;
}

export interface AUTH_STATE {
  isAuthenticated: boolean;
  isInitialized: boolean;
  data: AUTH_DATA | null;
}

export interface INITIALIZE_ACTION {
  isAuthenticated: boolean;
  data: AUTH_DATA | null;
}

export interface LOGIN_DATA {
  email: string;
  password: string;
}

// contexts
// sidebar-context
export interface SIDEBAR_CONTEXT {
  isOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

// components
// custom-icon-button props
interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
}

interface UrlObject {
  auth?: string | null | undefined;
  hash?: string | null | undefined;
  host?: string | null | undefined;
  hostname?: string | null | undefined;
  href?: string | null | undefined;
  pathname?: string | null | undefined;
  protocol?: string | null | undefined;
  search?: string | null | undefined;
  slashes?: boolean | null | undefined;
  port?: string | number | null | undefined;
  query?: string | null | ParsedUrlQueryInput | undefined;
  replace?: boolean;
}

export interface CUSTOM_ICON_BUTTON_PROPS
  extends Omit<IconButtonProps, "href"> {
  href?:
    | UrlObject
    | string
    | {
        url: UrlObject | string;
        as?: (UrlObject | string) | undefined;
        options?: (TransitionOptions & { replace?: boolean }) | undefined;
      };
}

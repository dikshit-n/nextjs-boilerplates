import { WITH_RBAC_OPTIONS } from "../../data";
import {
  getReturnElementBasedOnNotFoundProp,
  isAccessibleByRole,
  isAuthRoute,
  isPublicRoute,
} from "./utils";

export const withRBAC = (
  component: JSX.Element,
  options: WITH_RBAC_OPTIONS
) => {
  const { token, pathname, onRoleCheckFailure, loading, fallback, role } =
    options;
  const notFound = onRoleCheckFailure ? options.notFound : true;
  // check whether we are in a public route
  if (isPublicRoute(pathname) || pathname === "/") {
    return component;
  } else {
    if (loading) return fallback;
    if (token) {
      // check whether the route is accessible by specified role
      if (isAccessibleByRole(pathname, role)) {
        return component;
      }
      // else check for not found
      return getReturnElementBasedOnNotFoundProp({
        pathname,
        fallback,
        notFound,
        onRoleCheckFailure,
      });
    } else {
      // check whether we are in login route (unauth routes), then return component else onRoleCheckFailure
      if (isAuthRoute(pathname)) {
        return component;
      }
      // else check for not found
      return getReturnElementBasedOnNotFoundProp({
        pathname,
        fallback,
        notFound,
        onRoleCheckFailure,
      });
    }
  }
};

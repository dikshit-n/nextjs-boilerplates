import { ReactElement } from "react";
import {
  AUTH_ROUTES,
  NOT_FOUND_CHECK_PARAMS,
  PUBLIC_ROUTES,
  UN_AUTH_ROUTES,
} from "../../data";
import Error from "next/error";

export const isPublicRoute = (pathname: string | undefined | null) => {
  if (pathname)
    return PUBLIC_ROUTES.find((route) => pathname.startsWith(route));
  return false;
};

export const isAuthRoute = (pathname: string | undefined | null) => {
  if (pathname) return AUTH_ROUTES.find((route) => pathname.startsWith(route));
  return false;
};

export const isUnAuthRoute = (pathname: string | undefined | null) => {
  if (pathname)
    return UN_AUTH_ROUTES.find((route) => pathname.startsWith(route));
  return false;
};

export const isAccessibleByRole = (
  pathname: string | undefined | null | false,
  role: string | undefined | null | false
) => {
  if (pathname && role) return pathname.startsWith(`/${role}`);
  return false;
};

export const getReturnElementBasedOnNotFoundProp = (
  options: NOT_FOUND_CHECK_PARAMS
) => {
  const { notFound, onRoleCheckFailure, pathname, fallback } = options;
  if (onRoleCheckFailure) onRoleCheckFailure(pathname);
  if (notFound) {
    // if not found is a boolean return the default 404 page of next js or your custom 404 page or the fallback based on condition
    if (typeof notFound === "boolean") {
      if (notFound) return <Error statusCode={404} />;
      return fallback;
    }
    // else return the custom not found they provided
    return notFound;
  } else {
    return fallback;
  }
};

export const withRole = (
  pathnames: string[],
  role: string | undefined | null | false
) => {
  if (pathnames && role)
    return pathnames.map((pathname) => `/${role}${pathname}`);
  return "";
};

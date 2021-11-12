import { withRole } from "../lib";

export const ROLES: string[] = ["superadmin", "company", "employee"]; // specify all the available roles for the entire app

export const PUBLIC_ROUTES: string[] = ["/verification"]; // specify the routes that can be rendered independent of authentication

// specify the routes that can be rendered only when the user is authenticated
export const AUTH_ROUTES: string[] = [
  ...ROLES.map((role) => withRole(["/", "/profile"], role)),
  "/logout",
].flat(1);

export const UN_AUTH_ROUTES: string[] = ["/login", "/signup"]; // specify the routes that can be rendered only when the user is not authenticated

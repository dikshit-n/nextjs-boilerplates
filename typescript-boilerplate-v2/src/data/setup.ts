// auth setup
export const authSetup = {
  token: "token",
  authPage: "/auth/login",
  homePage: "/",
};

// #rbac-setup
export const rbacSetup = {
  roles: ["admin", "superadmin"],
  homePage: {
    admin: "/",
    superadmin: "/",
  },
};

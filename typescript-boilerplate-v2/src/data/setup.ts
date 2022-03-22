// auth setup
export const authSetup = {
  tokenAccessor: "token",
  authPage: "/auth/login", // the exact login page
  homePage: "/",
};

// #rbac-setup
export const rbacSetup = {
  roles: ["hospital", "patient", "doctor", "reception"],
  homePage: {
    hospital: "/hospital",
    patient: "/patient",
    doctor: "/doctor",
    reception: "/reception",
  },
  publicRoutes: ["/verification"],
  authRoutes: ["/auth", "/auth/login"], // pages that are used for authentication purposes
};

//project-setup
export const projectSetup = {
  title: "HMS",
};

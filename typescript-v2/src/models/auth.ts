// redux

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

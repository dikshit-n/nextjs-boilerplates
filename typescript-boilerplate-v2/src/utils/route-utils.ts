export const isActiveRoute = ({
  path,
  route,
}: {
  path: string;
  route: string;
}) => {
  path = getValidRouteName(path);
  route = getValidRouteName(route);
  return path === "/" || route === "/" // strict check if the path is '/'
    ? route === path
    : path.startsWith(route) || route.startsWith(path);
};

const getValidRouteName = (pathname: string) => {
  if (pathname) {
    let newPathname = pathname;
    if (!newPathname.startsWith("/")) {
      newPathname = `/${newPathname}`;
    }
    if (!newPathname.endsWith("/")) {
      newPathname = `${newPathname}/`;
    }
    return newPathname;
  }
  return pathname;
};

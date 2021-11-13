import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { REDIRECT_PROPS } from "../../data/ts-definitions/common-components/redirect";

export const Redirect = ({ path }: REDIRECT_PROPS) => {
  const { push } = useRouter();
  useEffect(() => {
    push(path);
  }, []);
  return null;
};

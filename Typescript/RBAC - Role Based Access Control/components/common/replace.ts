import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { REPLACE_PROPS } from "../../data/ts-definitions/common-components/replace";

export const Replace = ({ path }: REPLACE_PROPS) => {
  const { replace } = useRouter();
  useEffect(() => {
    replace(path);
  }, []);
  return null;
};

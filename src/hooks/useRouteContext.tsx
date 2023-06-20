import { useContext } from "react";
import { RouteContext } from "../context/routeContext";

const useRouteContext = () => {
  return useContext(RouteContext);
};

export default useRouteContext;

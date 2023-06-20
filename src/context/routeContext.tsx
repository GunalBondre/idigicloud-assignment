import { createContext } from "react";
import { RouteConfig } from "../interfaces/routeConfig";

export interface contextProps {
  routes: RouteConfig[];
}

export const RouteContext = createContext<contextProps>({
  routes: [],
});

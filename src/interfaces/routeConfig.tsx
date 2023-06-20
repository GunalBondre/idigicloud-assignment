export interface RouteConfig {
  name?: string;
  locale?: string;
  path: string;
  // component?: React.ComponentType<any>;
  component: string;
  hideInMenu?: boolean;
  icon?: string;
  redirect?: string;
  exact?: boolean;
  accessTO?: string[];
  routes?: RouteConfig[];
  parentKey?: string;
  key?: string;
}

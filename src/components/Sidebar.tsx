import React, { useContext, useState, useMemo } from "react";
import { RouteConfig } from "../interfaces/routeConfig";
import { RouteContext } from "../context/routeContext";
import { Link, useLocation } from "react-router-dom";
import "../styles/components/sidebar.scss";
import getIconComponent from "../utils/getIconComponent";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Sidebar = () => {
  const { routes } = useContext(RouteContext);
  const location = useLocation();
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const isActive = useMemo(() => {
    return (path: string) => location.pathname === path;
  }, [location.pathname]);

  const renderIcon = useMemo(() => {
    return (iconName: string | undefined) => {
      const IconComponent = getIconComponent(iconName);
      return IconComponent ? <IconComponent /> : null;
    };
  }, []);

  const handleClick = (path: string) => {
    setOpen((prevState) => ({
      ...prevState,
      [path]: !prevState[path],
    }));
  };

  const renderItem = useMemo(() => {
    return (routes: RouteConfig[]) => {
      return routes.map((route) => {
        if (route.hideInMenu) {
          return null;
        }
        if (route.routes) {
          const isOpen = open[route.path];
          return (
            <div
              key={route.path}
              className={`menu-item ${isActive(route.path) ? "active" : ""}`}
            >
              <div className="menu-wrapper">
                <div className="icon-component">{renderIcon(route.icon)}</div>
                <div>
                  <div className="menu-title-icon-wrapper">
                    <h3 className="menu-title">{route.name}</h3>
                    <div
                      className="chevron"
                      onClick={() => handleClick(route.path)}
                    >
                      {isOpen ? <ExpandLess /> : <ExpandMore />}
                    </div>
                  </div>
                  {isOpen && (
                    <h4 className="submenu">{renderItem(route.routes)}</h4>
                  )}
                </div>
              </div>
            </div>
          );
        }
        return (
          <Link
            to={route.path}
            key={route.path}
            className={`menu-item ${isActive(route.path) ? "active" : ""}`}
          >
            <div className={"submenu-wrapper"}>
              {renderIcon(route.icon)}
              <h4 className="submenu">{route.name}</h4>
            </div>
          </Link>
        );
      });
    };
  }, [isActive, open, renderIcon]);
  return <div className="sidebar">{renderItem(routes)}</div>;
};

export default Sidebar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/components/breadcrumb.scss";
const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path !== "");

  return (
    <nav>
      <ul className="breadcrumb">
        {paths.map((path, index) => {
          const routePath = `/${paths.slice(0, index + 1).join("/")}`;
          const routeName = path.charAt(0).toUpperCase() + path.slice(1);

          return (
            <li key={index} className="crumb">
              <Link
                to={routePath}
                className={index === paths.length - 1 ? "active" : ""}
              >
                {routeName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;

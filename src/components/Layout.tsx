import Breadcrumb from "./Breadcrumb";
import Sidebar from "./Sidebar";
import React from "react";
import "../styles/components/layout.scss";
interface Props {
  children?: React.ReactNode;
}

let Layout: React.FC<Props>;
Layout = ({ children }) => {
  return (
    <div>
      <div className="layout">
        <Sidebar />
        <div className="content">
          <Breadcrumb />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

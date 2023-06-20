import React, { Suspense, useContext, lazy } from "react";
import "./App.css";
import { RouteContext } from "./context/routeContext";
import "./styles/main.scss";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { RouteConfig } from "./interfaces/routeConfig";
import Layout from "./components/Layout";

function App() {
  const { routes } = useContext(RouteContext);

  const renderRoutes = (routes: RouteConfig[]) => {
    return routes.map((route) => {
      const Component = lazy(() => import(`./${route.component}`));
      if (route.routes && route.routes.length > 0) {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<Outlet />}
            children={renderRoutes(route.routes)}
          />
        );
      }
      if (route.redirect) {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<Navigate to={route.redirect} replace />}
          />
        );
      }

      return (
        <Route key={route.path} path={route.path} element={<Component />} />
      );
    });
  };

  return (
    <div className="App" data-testid="app">
      <Router>
        <Layout>
          <Suspense fallback={<div>...loading</div>}>
            <Routes>
              <Route path="/" element={<h2>Home Page</h2>} />
              {renderRoutes(routes)}
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

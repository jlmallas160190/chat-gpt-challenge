import { Route, Routes } from "react-router-dom";
import { IRoute, IRoutes } from "./Routes.types";

const BaseRoutes = (props: IRoutes) => {
  const getRoutes = (routes: IRoute[]) =>
    routes.map((prop, key) => {
      return (
        <Routes key={key}>
          <Route path={`/${prop.path}`} element={prop.element} key={key} />
        </Routes>
      );
    });

  return getRoutes(props.routes);
};

export default BaseRoutes;

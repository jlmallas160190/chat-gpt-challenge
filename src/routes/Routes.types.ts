import { ReactNode } from "react";

export interface IRoute {
    path: string;
    element: ReactNode;
    order: number
}
export interface IRoutes{
    routes:IRoute[];
}

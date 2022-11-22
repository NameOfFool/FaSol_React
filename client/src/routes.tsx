import Admin from "./pages/Admin";
import { ComponentType, FC, ReactElement } from "react";
import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    PLAY_ROUTE,
    PLAYLIST_ROUTE,
    REGISTRATION_ROUTE,
    USER_ROUTE
} from "./utils/consts";
import { RouteProps } from "react-router-dom";
import Play from "./pages/Play";
import Playlist from "./pages/Playlist";
import User from "./pages/User";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration"

export class Route {
    path: string;
    Component: ReactElement;
}

export const authRoutes: Route[] = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin />
    },
    {
        path: USER_ROUTE,
        Component: <User></User>
    }]
export const publicRoutes: Route[] = [
    { path: PLAY_ROUTE, Component: <Play /> },
    { path: PLAYLIST_ROUTE, Component: <Playlist /> },
    { path: MAIN_ROUTE, Component: <Main /> },
    { path: LOGIN_ROUTE, Component: <Auth /> },
    { path: REGISTRATION_ROUTE, Component: <Registration /> }
]
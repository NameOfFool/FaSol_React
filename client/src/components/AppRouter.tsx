import React, { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { FC } from "react";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";

const AppRouter: FC = () => {
    const { store } = useContext(Context)
    return (

        <Routes>
            {

                store.isAuth && authRoutes.map((item) =>

                    <Route key={item.path} path={item.path} element={item.Component} />

                )

            }
            {
                publicRoutes.map((item) =>

                    <Route key={item.path} path={item.path} element={item.Component} />

                )
            }
            <Route
                path="*"
                element={<Navigate to={"/"} replace />}

            />
        </Routes>
    );
};

export default AppRouter;
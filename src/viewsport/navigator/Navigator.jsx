import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./navigator.data";
import Layout from "../../layout/layout";

function Navigator() {
    return (
        <BrowserRouter>
            <Suspense fallback={<p>Loading...</p>}>
                {/* <Layout/> */}
                    <Routes>
                        {publicRoutes.map((route) => (<Route key={route.path} path={route.path} element={route.element} />))}
                        {privateRoutes.map((route) => (<Route key={route.path} path={route.path} element={route.element} />))}
                    </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Navigator;

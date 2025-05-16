import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./navigator.data";
import Layout from "../../layout/layout";

function Navigator() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        {publicRoutes.map((route) => (<Route key={route.path} path={route.path} element={route.element} />))}
                        {privateRoutes.map((route) => (<Route key={route.path} path={route.path} element={route.element} />))}
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Suspense> 
    );
}

export default Navigator;

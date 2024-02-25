import {Suspense} from "react";
import {createBrowserRouter, Outlet} from "react-router-dom";
import App from "../../../App.tsx";
import {MainPage} from "../../../pages/MainPage";
import {SecondPage} from "../../../pages/SecondPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/second",
                element: <SecondPage />
            },

        ]
    },
]);

export const AppRouter = () => {
    return (
        <Suspense fallback={"Lodaing..."}>
            <Outlet />
        </Suspense>
    );
};

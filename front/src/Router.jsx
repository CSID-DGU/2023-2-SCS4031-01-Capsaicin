import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginMain from "../pages/Join/LoginMain"
import Join from "../pages/Join/Join"

const router = createBrowserRouter([

    {
        path: "App",
        element: <App />,
        children: [
            {
                path: "LoginMain",
                element: <LoginMain />
            },
            {
                path: "Join",
                element: <Join />
            }
        ]
    }
]);

export default router;
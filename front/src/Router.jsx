import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import JoinMain from "../pages/Join/JoinMain"

const router = createBrowserRouter([

    {
        path: "App",
        element: <App />,
        children: [
            {
                path: "JoinMain",
                element: <JoinMain />
            }
        ]
    }
]);

export default router;
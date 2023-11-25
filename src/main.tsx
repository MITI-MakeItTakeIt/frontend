import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage.tsx";
import { UserLogin } from "./pages/UserLogin.tsx";
import { UserRegister } from "./pages/UserRegister.tsx";
import { GameOperate } from "./pages/GameOperate.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Layout } from "./pages/Layout.tsx";
// import { GameDetail } from "./pages/GameDetail.tsx";

const queryClient = new QueryClient();

// import.meta.env.VITE_APP_KAKAO_JAVASCRIPT_KEY

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "/signup",
        element: <UserRegister />,
      },
      {
        path: "/operate-game",
        element: <GameOperate />,
      },
      // {
      //   path: "/find-games",
      //   element: <GamesList />,
      //   children: [{ path: "detail/:gameId", element: <GameDetail /> }],
      // },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <App /> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

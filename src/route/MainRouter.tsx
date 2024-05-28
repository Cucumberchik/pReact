import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import { FC } from 'react'
import App from "../app";
const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>} />
    </>
))
export const MainRouter:FC = () => {
  return <RouterProvider router={router} />
}

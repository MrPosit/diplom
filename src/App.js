import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import ShoppingPage from "./components/ShoppingPage/ShoppingPage";
import "./global.css";
import CountFlowers from "./components/FlowersCount/CountFlowers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<RegisterPage />} />
      <Route path="/registration" element={<RegisterPage />} />
      <Route path="/shopping" element={<ShoppingPage />} />
      <Route path="/fullmenu" element={<CountFlowers />} />
    </Route>
  )
);

function RootLayout() {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}

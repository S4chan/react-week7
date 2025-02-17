import { RouterProvider } from "react-router-dom";

import router from "./router/index.jsx";
import Toast from "../src/components/Toast.jsx";

export default function App() {
  return (
    <>
      <Toast />
      <RouterProvider router={router} future={{ v7_relativeSplatPath: true }} />
    </>
  );
}

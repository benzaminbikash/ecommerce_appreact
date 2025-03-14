import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import "./index.css";
import "react-quill/dist/quill.snow.css";
import { ToastContainer, Zoom } from "react-toastify";
import "@smastrom/react-rating/style.css";
import "react-multi-carousel/lib/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="623888077753-sdd86bpugjj2q1vm1bc6qb3gicjuhg3t.apps.googleusercontent.com">
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            closeButton={true}
            transition={Zoom}
            limit={1}
          />
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import App from "./App.jsx";
import "./index.css";

// const handleRedirectCallback = (user, appState) => {
//   console.log({ user, appState });
//   if (appState?.redirectTo) {
//     console.log("Redirecting to", appState.redirectTo);
//     window.location = appState.redirectTo;
//   } else {
//     console.log("Redirecting to /");
//     window.location = "/";
//   }
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KindeProvider
      clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
      domain={import.meta.env.VITE_KINDE_DOMAIN}
      logoutUri={window.location.origin}
      redirectUri={window.location.origin}
      // onRedirectCallback={handleRedirectCallback}
      // isDangerouslyUseLocalStorage={true}
    >
      <App />
    </KindeProvider>
  </React.StrictMode>
);

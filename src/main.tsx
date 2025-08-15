import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
// import App from "./App.tsx";
import { OnboardingForm } from "./pages/onborarding-form/onboarding-form.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      {/* <App /> */}
      <OnboardingForm />
    </Provider>
  </StrictMode>
);

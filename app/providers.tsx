"use client";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ContextToggleProvider } from "@/context/NavbarToggleContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClerkProvider } from "@clerk/nextjs";

// create a client
const queryClient = new QueryClient();
// persistor.purge() // clears localStorage for redux-persist

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider signInUrl="/login" signUpUrl="/signup">
      <QueryClientProvider client={queryClient}>
        <ContextToggleProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
          </Provider>
        </ContextToggleProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default Providers;

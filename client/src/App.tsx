import { useEffect } from "react";
import Header from "./components/Header"
import LoginPage from "./components/LoginPage";
import useAuthStore from "./store/useAuthStore";


function App() {
  const initialize = useAuthStore((state) => state.initialize);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div className="h-full">
      <Header />
      <main className="flex justify-center items-center h-full">
        {!isLoggedIn
        ? <LoginPage />
        : (
          <h1 className="font-display text-4xl">Welcome to this app</h1>
        )
        }
      </main>
    </div>
  )
}

export default App

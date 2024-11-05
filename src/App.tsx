import Header from "./components/Header"
import LoginPage from "./components/LoginPage";


function App() {

  return (
    <div className="grid grid-rows-1 gap-3">
        <Header>
          <h1 className="text-5xl font-display">Welcome</h1>
        </Header>
        <LoginPage />
    </div>
  )
}

export default App

import Header from "./components/Header"
import RegisterPage from "./components/RegisterPage";


function App() {

  return (
    <div className="grid grid-rows-1 gap-3">
        <Header>
          <h1 className="text-5xl font-display">Welcome</h1>
        </Header>
        <RegisterPage />
    </div>
  )
}

export default App

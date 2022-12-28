import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;

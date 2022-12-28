import Header from "./components/Header";
import HeaderTwo from "./components/HeaderTwo";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Dashboard2 from "./pages/DashboardTwo";

function App() {
  return (
    <div className="App">
      <Profile />
      <HeaderTwo />
      <Dashboard2 />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;

import Topbar from "./components/topbar";
import SideBar from "./pages/alert/sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Alert from "./pages/alert";

function App() {
  return (
    <div className="app">
      <main className="container">
        <Topbar></Topbar>
        <div className="content-wrapper">
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/alerts" element={<Alert />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

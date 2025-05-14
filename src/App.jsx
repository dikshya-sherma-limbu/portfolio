import "./styles/App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-primary min-h-screen p-16">
      <Outlet />
    </div>
  );
}

export default App;

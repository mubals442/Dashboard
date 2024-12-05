import { useEffect } from "react";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home";

function App() {
  useEffect(() => {
    document.title = "Musab Dashbord";
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <Home />
    </div>
  );
}

export default App;

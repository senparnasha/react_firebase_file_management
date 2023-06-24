import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Login,Register,Homepage,DashboardPage } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        
        <Route path="/dashboard" element={<DashboardPage/>} />

      </Routes>
    </div>
  );
};

export default App;

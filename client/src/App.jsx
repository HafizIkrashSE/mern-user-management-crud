import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

function App() {
  return (
    <BrowserRouter>
      <header className="app-header">
        <div className="header-content">
          <div className="logo">CRUD</div>

          <div>
            <h1>MERN User Management</h1>
            <p>Manage your users easily</p>
          </div>
        </div>
      </header>

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
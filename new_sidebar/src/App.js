import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Teacher from "./pages/Teacher";
import Addteacher from "./pages/Addteacher";
import Payment from "./pages/Payment";
import Document from "./pages/Document";
import FeeTransaction from "./pages/FeeTransaction";
import Books from "./pages/Books";
import LibraryTransaction from "./pages/LibraryTransaction";
import CalenderEvent from "./pages/CalenderEvent";
import GuestForm from "./pages/GuestForm";
// import Student from "./pages/Student";
// import StudentAA from "./pages/StudentAA";
// import StudentM from "./pages/StudentM";
import Parent from "./pages/Parent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import Fees from "./pages/Fees";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <SideBar>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/teacher" element={<Addteacher />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/document" element={<Document />} />
            {/* <Route path="/student" element={<Student />} /> */}
            {/* <Route path="/studentaa" element={<StudentAA />} /> */}
            {/* <Route path="/studentm" element={<StudentM />} /> */}
            <Route path="/parent" element={<Parent />} />
            <Route path="/books" element={<Books />} />
            <Route path="/library_transaction" element={<LibraryTransaction />} />
            <Route path="/fee_transaction" element={<FeeTransaction />} />
            <Route path="/calender_event" element={<CalenderEvent />} />
            <Route path="/guest_info" element={<GuestForm />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="*" element={<Teacher />} />
          </Routes>
        </SideBar>
      ) : (
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onLogOut={handleLogout} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
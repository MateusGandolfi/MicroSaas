import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/src/pages/Login";
import DashboardPage from "@/src/pages/Dashboard";
import { PrivateRoute } from "@/src/components/ui/PrivateRoute";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          } 
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
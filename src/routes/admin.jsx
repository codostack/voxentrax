import { Routes, Route } from "react-router-dom";
import Forgot from "../admin/auth/Forgot";
import ResetPassword from "../admin/auth/ResetPassword";
import Dashboard from "../admin/panel/Dashboard";
import PrivateRoute from "../admin/components/PrivateRoute";
import AdminOtpLogin from "../admin/auth/AdminOtpLogin";
import NotFound from "../components/NotFound";

const AdminRoutes = () => {
    return (
        <Routes>

            {/* 🔓 PUBLIC ADMIN ROUTES */}
            <Route path="/" element={<AdminOtpLogin />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />

            {/* 🔒 PROTECTED ADMIN ROUTES */}
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
};

export default AdminRoutes;
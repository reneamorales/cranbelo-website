import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import CoursePage from "../pages/CoursePage";
import PaymentMethodsPage from "../pages/PaymentMethodsPage";
import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />

                {/*<Route path="/course" element={<CoursePage />} />*/}
                <Route path="/course/:id" element={<CoursePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/payments" element={<PaymentMethodsPage />} />
                <Route path="*" element={<Navigate to="/404" />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

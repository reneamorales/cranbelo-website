import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import CoursePage from "../pages/CoursePage";
import FaqsPage from "../pages/FaqsPage";
import PaymentMethodsPage from "../pages/PaymentMethodsPage";
import TeryConPage from "../pages/TeryConPage";
import Page404 from "../pages/Page404";

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
                <Route path="/course/:id" element={<CoursePage />} />
                <Route path="/nosotros" element={<AboutUs />} />
                <Route path="/preguntas-frecuentes" element={<FaqsPage />} />
                <Route path="/#contacto" element={<Navigate to="/contacto" replace/>} />
                <Route path="/formas-de-pagos" element={<PaymentMethodsPage />} />
                <Route path="/tyc" element={<TeryConPage />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

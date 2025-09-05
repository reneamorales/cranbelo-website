import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Home from "../pages/Home";
{/* import About from "../pages/About";
import Faq from "../pages/Faq";*/}
import CoursePage from "../pages/CoursePage";
{/*import CourseDetail from "../pages/CourseDetail";*/ }
{/*import Page404 from "../pages/Page404";*/ }
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

                <Route path="/pdp" element={<CoursePage />} />

                <Route path="*" element={<Navigate to="/404" />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

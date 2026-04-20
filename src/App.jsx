import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Blog from "./pages/Blog.jsx";
import FinancialPlanning from "./components/Services/FinancialPlanning.jsx";
import InvestmentPlanning from "./components/Services/InvestmentPlanning.jsx";
import GoalPlanning from "./components/Services/GoalPlanning.jsx";
import TaxPlanning from "./components/Services/TaxPlanning.jsx";
import RiskManagement from "./components/Services/RiskManagement.jsx";
import RetirementPlanning from "./components/Services/RetirementPlanning.jsx";
import NRIServices from "./components/Services/NRIServices.jsx";
import Products from "./pages/Products.jsx";
import MutualFunds from "./components/Products/MutualFunds.jsx";
import Insurance from "./components/Products/Insurance.jsx";
import GOIBonds from "./components/Products/GOIBonds.jsx";
import CapitalGainBonds from "./components/Products/CapitalGainBonds.jsx";
import FixedDeposit from "./components/Products/FixedDeposit.jsx";
import Awards from "./pages/Awards.jsx";
import Calculator from "./pages/Calculator.jsx";
import KycPanServices from "./components/Resources/KycPanServices.jsx";
import EducationalImages from "./components/Resources/EducationalImages.jsx";
import EducationalVideos from "./components/Resources/EducationalVideos.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-white">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/services/financial-planning" element={<FinancialPlanning />} />
                        <Route path="/services/investment-planning" element={<InvestmentPlanning />} />
                        <Route path="/services/goal-planning" element={<GoalPlanning />} />
                        <Route path="/services/tax-planning" element={<TaxPlanning />} />
                        <Route path="/services/risk-management" element={<RiskManagement />} />
                        <Route path="/services/retirement-planning" element={<RetirementPlanning />} />
                        <Route path="/services/nri-services" element={<NRIServices />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/mutual-funds" element={<MutualFunds />} />
                        <Route path="/products/insurance" element={<Insurance />} />
                        <Route path="/products/goi-bonds" element={<GOIBonds />} />
                        <Route path="/products/capital-gain-bonds" element={<CapitalGainBonds />} />
                        <Route path="/products/fixed-deposit" element={<FixedDeposit />} />
                        <Route path="/resources/kyc-pan-services" element={<KycPanServices />} />
                        <Route path="/resources/educational-images" element={<EducationalImages />} />
                        <Route path="/resources/educational-videos" element={<EducationalVideos />} />
                        <Route path="/calculators" element={<Calculator />} />
                        <Route path="/awards" element={<Awards />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogDetails />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

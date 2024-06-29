import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingComponent from "./components/Loading/Loading";
import NotificationBar from "./components/Notification/Notification";
import MBBSPage from "./components/Section/Programs/MBBS";
import BPharmacyPage from "./components/Section/Programs/B_PHARMA";
import BScNursingPage from "./components/Section/Programs/BSC_NURSING";
import PGMDMSPage from "./components/Section/Programs/PGMD";
import GNMPage from "./components/Section/Programs/GNM";
import ProgramsPage from "./components/Section/Programs";
import FAQPage from "./components/Section/Faq/Faq";
import NewsComponent from "./components/Section/News/news";
import PDFViewer from "./components/Section/pdf/pdf";

const Footer = React.lazy(() => import("./components/Section/Footer/Footer"));
const Header = React.lazy(() => import("./components/Section/Header/Header"));
const RegisterPage = React.lazy(
  () => import("./components/Section/Register/Register")
);

const LoginPage = React.lazy(() => import("./components/Section/Login/Login"));
2
const Home = React.lazy(() => import("./components/Home/Home"));
const AboutUs = React.lazy(
  () => import("./components/Section/AboutUs/AboutUs")
);
const ContactUs = React.lazy(
  () => import("./components/Section/ContactUs/ContactUS")
);
const UserDashboard = React.lazy(() => import("./components/User/Main"));

const App: React.FC = () => {
  return (
    <Router>
      <React.Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/*" element={<GeneralRoute />} />
          <Route path="/user/*" element={<PublicRoute />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
};

const GeneralRoute: React.FC = () => (
  <React.Fragment>
    <Header />
    <br/>
    <NotificationBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="mbbs" element={<MBBSPage />} />
      <Route path="bpharmacy" element={<BPharmacyPage />} />
      <Route path="bscnursing" element={<BScNursingPage />} />
      <Route path="pgmdms" element={<PGMDMSPage />} />
      <Route path="programs" element={<ProgramsPage />} />
      <Route path="gnm" element={<GNMPage />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="faq" element={<FAQPage />} />
      <Route path="/neetupdates" element={<NewsComponent />} />
      <Route path="/images/sanakaProspectus" element={<PDFViewer pdfUrl="/images/sanakaProspectus.pdf" />} />


    </Routes>
    <Footer />
  </React.Fragment>
);

const PublicRoute: React.FC = () => (
  <React.Fragment>
    <Header />
    <Routes>
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="dashboard" element={<UserDashboard />} />
    </Routes>
    <Footer />
  </React.Fragment>
);


export default App;

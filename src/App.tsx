import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingComponent from "./components/Loading/Loading";
import NotificationBar from "./components/Notification/Notification";
const Footer = React.lazy(() => import("./components/Section/Footer/Footer"));
const Header = React.lazy(() => import("./components/Section/Header/Header"));
const Home = React.lazy(() => import("./components/Home/Home"));
const App: React.FC = () => {
  return (
    <Router>
      <React.Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/*" element={<GeneralRoute />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
};

const GeneralRoute: React.FC = () => (
  <React.Fragment>
    <Header />
    <br />
    <NotificationBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </React.Fragment>
);

export default App;

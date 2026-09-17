import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CareerPaths from "./components/CareerPaths";
import HowItWorks from "./components/HowItWorks";
import JobOpportunities from "./components/JobOpportunities";
import CareerMap from "./components/CareerMap";
import SuccessStories from "./components/SuccessStories";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AllCoursesPage from "./pages/AllCoursesPage";
import Chatbot from "./components/Chatbot";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeSection, setActiveSection] = useState("top");

  const handleNavigate = (page, section = "top") => {
    setCurrentPage(page);
    setActiveSection(section);
  };

  useEffect(() => {
    if (currentPage !== "home") {
      return;
    }

    const target = document.getElementById(activeSection);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage, activeSection]);

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === "courses" ? (
        <CoursesPage onNavigate={handleNavigate} />
      ) : currentPage === "contact" ? (
        <ContactPage onNavigate={handleNavigate} />
      ) : currentPage === "allcourses" ? (
        <AllCoursesPage onNavigate={handleNavigate} />
      ) : (
        <>
          <Hero onNavigate={handleNavigate} />
          <CareerPaths onNavigate={handleNavigate} />
          <HowItWorks />
          <JobOpportunities />
          <CareerMap />
          <SuccessStories />
          <FinalCTA onNavigate={handleNavigate} />
        </>
      )}

      <Footer onNavigate={handleNavigate} />
      <Chatbot onNavigate={handleNavigate} />
    </>
  );
}

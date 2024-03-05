import { useState, useEffect } from "react";
import "./css/App.css";
import { app as firebaseApp } from "./components/Modules/firebase";
import Button from "./components/Reusable-components/Button";
import Navigation from "./components/Modules/Navigation";
import Hero from "./components/Modules/Hero";
import ContactMe from "./components/Modules/ContactMe";
import Experiences from "./components/Modules/Experiences";
import Skills from "./components/Modules/Skills";
import Projects from "./components/Modules/Projects";
import { getDatabase, ref, get } from "firebase/database";

function App() {
  const [showUpButton, setShowUpButton] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleDownload = () => {
    // Az önéletrajz fájl elérési útvonala
    const fileUrl = "/Szilveszter_Nyeste_CV_Eng.pdf"; // Például: /public/oneletrajz.pdf

    // Letöltés elindítása
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Szilveszter_Nyeste_CV_Eng.pdf"; // Meghatározzuk a letöltött fájl nevét
    link.click();
  };

  useEffect(() => {
    const fetchData = async () => {
      const database = getDatabase(firebaseApp);
      const projectsRef = ref(database, "projects");

      try {
        const snapshot = await get(projectsRef);
        if (snapshot.exists()) {
          console.log("Projects:", snapshot.val());
          setProjects(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (firebaseApp) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 0.5) {
        setShowUpButton(true);
      } else {
        setShowUpButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      {showUpButton && (
        <a className="upp-butt" href="#header">
          <Button text="Up" />
        </a>
      )}
      <Navigation />
      <Hero handleDownload={handleDownload} />
      <Experiences />
      <Skills />

      <Projects projects={projects} />
      <div className="contact-section" id="contact">
        <div className="main-title">Contact me</div>
        <div className="form-box">
          <ContactMe firebaseApp={firebaseApp} />
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import './css/App.css';
import { app as firebaseApp } from './components/Modules/firebase'; // Firebase inicializálás importálása
import Button from "./components/Reusable-components/Button"
import Navigation from './components/Modules/Navigation';
import Hero from './components/Modules/Hero';
import ContactMe from "./components/Modules/ContactMe";
import Experiences from "./components/Modules/Experiences";
import Skills from "./components/Modules/Skills";
import Projects from "./components/Modules/Projects";
import { getDatabase, ref, get } from 'firebase/database'; // Firebase adatbázis modul importálása

function App() {
  const [showUpButton, setShowUpButton] = useState(false);


  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
 // const projectsPerPage = 3;


  const totalPages = Math.ceil(projects.length - 2);
//const visiblePages = Math.min(totalPages, projects.length - projectsPerPage + 1);
const handlePrevPage = () => {
  setCurrentPage(prevPage => Math.max(prevPage - 1, 0));
};

const handleNextPage = () => {
  setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages - 1));
};

///const startSlice = Math.max(currentPage, 0);
//const endSlice = Math.min(startSlice + projectsPerPage, projects.length);


  

  useEffect(() => {
    const fetchData = async () => {
      const database = getDatabase(firebaseApp);
      const projectsRef = ref(database, 'projects');
      
      try {
        const snapshot = await get(projectsRef);
        if (snapshot.exists()) {
          console.log('Projects:', snapshot.val());
          setProjects(Object.values(snapshot.val()));
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // Ellenőrizze, hogy a firebaseApp inicializálva van-e, mielőtt megpróbálja letölteni az adatokat
    if (firebaseApp) {
      fetchData();
    }
  }, []); // Ha a firebaseApp változik, újra futtatja a fetchData függvényt


useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= window.innerHeight * 0.5) {
        setShowUpButton(true);
      } else {
        setShowUpButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*function smoothScroll(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }*/
  
  return (
    <div className="app">
      {showUpButton && 
        <a className='upp-butt' href='#header'>
          <Button text="Up"/>
        </a>
      } 
      <Navigation />
      <Hero />
      <Experiences />
      <Skills />

      <Projects projects={projects} currentPage={currentPage} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage}/>
      <div className='contact-section' id="contact">
        <div className='main-title'>Contact me</div>
        <div className='form-box'>
          <ContactMe firebaseApp={firebaseApp} /> {/* Firebase inicializáció átadása a ContactMe komponensnek */}
        </div>
      </div>
    </div>  
  );
}

export default App;

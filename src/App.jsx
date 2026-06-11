import { ThemeProvider } from './context/ThemeContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Layout } from './components/layout';
import {
  Hero,
  Experience,
  Projects,
  Skills,
  Education,
  Contact
} from './components/sections';
import resumeData from './data/resumeData';
import './styles/global.css';

function App() {
  const {
    personal,
    stats,
    experience,
    projects,
    skills,
    education,
    certifications
  } = resumeData;

  useScrollReveal();

  return (
    <ThemeProvider>
      <Layout name={personal.name} personal={personal}>
        <Hero personal={personal} stats={stats} />
        <Experience experiences={experience} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Education education={education} certifications={certifications} />
        <Contact personal={personal} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

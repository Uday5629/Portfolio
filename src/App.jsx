import { ThemeProvider } from './context/ThemeContext';
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
  const { personal, experience, projects, skills, education, certifications } = resumeData;

  return (
    <ThemeProvider>
      <Layout name={personal.name}>
        <Hero personal={personal} />
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

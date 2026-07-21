import Projects from "./features/projects/Projects";
import data from "./data/data.json";
import Hero from "./features/hero/Hero";
import Skills from "./features/skills/Skills";

function App() {
  return (
    <div>
      <Hero personals={data.personals} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
    </div>
  );
}

export default App;

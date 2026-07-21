import React from "react";
import SkillCard from "./SkillCard";

const Skills = ({ skills }) => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div>
        {Object.entries(skills).map(([category, technologies]) => (
          <div key={category}>
            <h3>{category}</h3>
            <div>
              {technologies.map((tech) => (
                <SkillCard key={tech} skill={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

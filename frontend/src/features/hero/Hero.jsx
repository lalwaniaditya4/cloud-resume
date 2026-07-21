import React from "react";

const Hero = ({ personals }) => {
  return (
    <section id="hero">
      <div>
        <ul>
          <li>Name: {personals.name}</li>
          <li>Email: {personals.email}</li>
          <li>Phone: {personals.phone}</li>
          <li>GitHub: {personals.github}</li>
          <li>LinkedIn: {personals.linkedin}</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;

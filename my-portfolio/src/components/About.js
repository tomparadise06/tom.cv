import React from 'react';

const About = () => {
  return (
    <section id="a-propos">
      <div className="container about-content">
        <img src="6c5bbefd-8a94-45b1-97b4-073ced7bc41a.png" alt="Photo de Tom Mergui" className="profile-pic" />
        <div className="about-text">
          <h2>À Propos de Moi</h2>
          <p>Étudiant de 21 ans en Bachelor web design UX UI & Digital Marketer, actuellement en stage à Amiens. Passionné par le cinéma, les voyages et la photographie.</p>
          <p>Je m'efforce de créer des expériences utilisateur intuitives et esthétiques. Mon objectif est de combiner fonctionnalité et design pour offrir la meilleure expérience possible.</p>
        </div>
      </div>
    </section>
  );
};

export default About;

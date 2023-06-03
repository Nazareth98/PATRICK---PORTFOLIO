import "../../Styles/Components/home.scss";
import React from "react";
import curriculo from "../../Assets/pdf/Patrick Nazareth - Currículo.pdf";

const Home = () => {
  return (
    <main id="home" className="container home-container">
      <div className="home-content">
        <span>Olá, meu nome é</span>
        <h1 data-aos="fade-up" data-aos-duration="1400" className="title">
          Patrick Nazareth.
        </h1>
        <h2 data-aos="fade-up" data-aos-duration="1600" className="title">
          Eu construo aplicações para web.
        </h2>
        <div
          data-aos="fade-up"
          data-aos-duration="1650"
          className="home-description"
        >
          <p>
            Sou um estudante de Análise e Desenvolvimento de Sistemas buscando
            iniciar minha carreira na área de programação.
          </p>
        </div>
        <a
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-delay="1000"
          className="button"
          href={curriculo}
          target="_blank"
          rel="noreferrer"
        >
          Acesse meu currículo
        </a>
      </div>
    </main>
  );
};

export default Home;

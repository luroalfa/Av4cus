import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AV4CUS-Inicio</title>
        <meta
          name="description"
          content="AV4CUS es una empresa tecnológica líder en el mercado que se enfoca en proporcionar soluciones SaaS innovadoras y de alta calidad para ayudar a las empresas a optimizar sus procesos y mejorar sus resultados. Con más de 5 años de experiencia en el mercado, nuestro enfoque está en ofrecer soluciones tecnológicas escalables y personalizables que se adaptan a las necesidades específicas de cada empresa."
        />
        <meta
          name="keywords"
          content="Soluciones SaaS, Gestión de activos, Gestión de personal en terreno, Análisis de datos en tiempo real, Optimización de procesos, Transformación digital, Innovación tecnológica, Eficiencia empresarial, Automatización de procesos, ERP, Asistente Empresarial, Asistente Laboral, Synapse, Move0n, Avacus, Av4cus, Telecomunicaciones, reporteria, reporte fotográfico, inventario, formularios, formularios dinámicos, reporteria flexible"
        />
        {/* TODO
            Una vez comprado el dominio debo modificar este link
        */}
        <link rel="canonical" href="https://www.av4cus.com" />
      </Helmet>

      <Header />
      <h1>Home</h1>
      <Footer />
    </>
  );
};

export default Home;

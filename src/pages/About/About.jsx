import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import WhatsAppButton from "../../components/WatsAppButton/WhatsAppButton";

const About = () => {
  return (
    <>
      <Helmet>
        <title>AV4CUS-Nosotros</title>
        <meta
          name="description"
          content="En Av4cus nos dedicamos a brindar soluciones tecnológicas innovadoras y eficientes a través de nuestros productos SaaS Synapse y Move0n. En nuestra página de Nosotros, podrás conocer más sobre nuestra empresa, nuestros valores y equipo de profesionales, y cómo podemos ayudarte a alcanzar tus objetivos tecnológicos."
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
      <h1>ABOUT</h1>
      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default About;

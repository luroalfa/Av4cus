import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import WhatsAppButton from "../../components/WatsAppButton/WhatsAppButton";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>AV4CUS-Servicios</title>
        <meta
          name="description"
          content="Descubre los servicios SaaS de Synapse y Move0n de Av4cus, diseñados para ayudarte a optimizar tus procesos de negocio y aumentar tu productividad. Desde gestión de proyectos hasta soluciones de inteligencia artificial, ofrecemos una amplia gama de servicios para satisfacer tus necesidades."
        />
        <meta
          name="keywords"
          content="servicios SaaS, Synapse, Move0n, gestión de proyectos, inteligencia artificial, optimización de procesos, productividad, soluciones de negocio, Soluciones SaaS, Gestión de activos, Gestión de personal en terreno, Análisis de datos en tiempo real, Optimización de procesos, Transformación digital, Innovación tecnológica, Eficiencia empresarial, Automatización de procesos, ERP, Asistente Empresarial, Asistente Laboral, Synapse, Move0n, Avacus, Av4cus, Telecomunicaciones, reporteria, reporte fotográfico, inventario, formularios, formularios dinámicos, reporteria flexible"
        />
      </Helmet>
      <Header />
      <h1>SERVICES</h1>
      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Services;

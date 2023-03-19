import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import WhatsAppButton from "../../components/WatsAppButton/WhatsAppButton";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>AV4CUS-Contacto</title>
        <meta
          name="description"
          content="En nuestra sección de contacto podrás encontrar diferentes maneras de ponerte en contacto con nuestro equipo de expertos en servicios digitales, desde nuestro formulario de contacto hasta nuestras redes sociales. ¡Contáctanos hoy mismo y comienza a transformar tu presencia en línea!"
        />
        <meta
          name="keywords"
          content="contacto, formulario de contacto, información de contacto, correo electrónico, teléfono, dirección, atención al cliente, soporte técnico, asistencia, consultas, solicitud de información, Soluciones SaaS, Gestión de activos, Gestión de personal en terreno, Análisis de datos en tiempo real, Optimización de procesos, Transformación digital, Innovación tecnológica, Eficiencia empresarial, Automatización de procesos, ERP, Asistente Empresarial, Asistente Laboral, Synapse, Move0n, Avacus, Av4cus, Telecomunicaciones, reporteria, reporte fotográfico, inventario, formularios, formularios dinámicos, reporteria flexible"
        />
        {/* TODO
            Una vez comprado el dominio debo modificar este link
        */}
        <link rel="canonical" href="https://www.av4cus.com" />
      </Helmet>
      <Header />
      <h1>CONTACT</h1>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Contact;

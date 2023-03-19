import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";

const FAQs = () => {
  return (
    <>
      <Helmet>
        <title>AV4CUS-Faqs</title>
        <meta
          name="description"
          content="Encuentra respuestas a las preguntas más frecuentes sobre nuestros productos y servicios en la página de preguntas frecuentes (FAQs) de Av4cus. Aprende sobre nuestras políticas, procesos y otros detalles importantes que te ayudarán a tomar decisiones informadas."
        />
        <meta
          name="keywords"
          content="preguntas frecuentes, FAQs, ayuda, soporte técnico, servicios, productos, soluciones, clientes, asistencia, consultas, respuestas, Soluciones SaaS, Gestión de activos, Gestión de personal en terreno, Análisis de datos en tiempo real, Optimización de procesos, Transformación digital, Innovación tecnológica, Eficiencia empresarial, Automatización de procesos, ERP, Asistente Empresarial, Asistente Laboral, Synapse, Move0n, Avacus, Av4cus, Telecomunicaciones, reporteria, reporte fotográfico, inventario, formularios, formularios dinámicos, reporteria flexible"
        />
        {/* TODO
            Una vez comprado el dominio debo modificar este link
        */}
        <link rel="canonical" href="https://www.av4cus.com" />
      </Helmet>
      <Header />
      <h1>FAQS</h1>
      <Footer />
    </>
  );
};

export default FAQs;

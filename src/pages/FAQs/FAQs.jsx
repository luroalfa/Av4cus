import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import WhatsAppButton from "../../components/WatsAppButton/WhatsAppButton";
import {
  BgSection,
  Section1,
  ContenedorTitle,
  Slider,
  SliderContainer,
  Title,
} from "./Style/FAQsStyleElements";
import Container from "../../components/Container/Container";
import { Collapse } from "antd";
import faqData from "../../store/faqData";

const { Panel } = Collapse;

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
      <SliderContainer>
        <Slider>
          <ContenedorTitle>
            <Title>PREGUNTAS MÁS FRECUENTES</Title>
            <p>
              En nuestra sección encontrarás respuestas a las preguntas más
              comunes acerca de nuestros servicios.
            </p>
          </ContenedorTitle>
        </Slider>
      </SliderContainer>
      <BgSection>
        <Container>
          <Section1>
            <p>
              Hemos creado esta sección para brindar una experiencia óptima al
              usuario y resolver sus dudas de manera rápida y eficiente.
              <br />
              Actualizamos regularmente nuestra sección de FAQs para reflejar
              las preguntas más frecuentes y relevantes.
              <br />
              ¡Esperamos que encuentres la respuesta que buscas aquí!
            </p>
          </Section1>
        </Container>
      </BgSection>
      <Container>
        <Collapse bordered={false}>
          {faqData.map((faq) => (
            <Panel header={faq.question} key={faq.id}>
              <p>{faq.answer}</p>
              {faq.video && (
                <>
                  <video src={faq.video} controls width={"100%"}>
                    <source src={faq.video} type="video/mp4" />
                  </video>
                </>
              )}
            </Panel>
          ))}
        </Collapse>
      </Container>
      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default FAQs;

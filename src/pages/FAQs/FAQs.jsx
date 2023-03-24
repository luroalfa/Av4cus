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

const { Panel } = Collapse;
const URLVideoBuscarOrden =
  "https://avacusvideofaqs.s3.amazonaws.com/buscarorden.mp4";

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
          <Panel header="¿Qué es Synapse?" key="1">
            <p>
              Synapse es un software como servicio para la gestión
              administrativa y automatización de procesos sincronizados en la
              nube, que permite la generación de reportes con dicha información.
            </p>
          </Panel>
          <Panel
            header="¿Cómo puedo adquirir los servicios de Synapse?"
            key="2"
          >
            <p>
              El Cliente puede adquirir los servicios de Synapse de Av4cus
              mediante una suscripción mensual que se basa en el número de
              usuarios administrativos y técnicos activos, con un precio de $5
              USD por usuario.
            </p>
          </Panel>
          <Panel
            header="¿Qué sucede si no cancelo la mensualidad correspondiente a tiempo?"
            key="3"
          >
            <p>
              Si el Cliente no cancela la mensualidad correspondiente dentro de
              los primeros quince días hábiles del siguiente mes, a partir del
              día 16 se incluirá un cobro moratorio de UNO POR CIENTO (1%)
              diario, que se calculará sobre el principal vencido y no pagado.
              La mora operará bajo el concepto de incumplimiento en el pago del
              principal, sin necesidad de protesta, requerimiento o intimación.
            </p>
          </Panel>
          <Panel header="¿Como se puede buscar una orden?" key="4">
            <p>
              Para facilitar el proceso de buscar una orden de pedido, hemos
              creado un video tutorial que muestra paso a paso cómo realizarlo.
              Al seguir las instrucciones del video, podrás buscar tu orden de
              manera rápida y sencilla. Además, el video te ayudará a visualizar
              mejor el proceso y responder a posibles dudas.
            </p>
            <p>¡No dudes en revisarlo para obtener más detalles!</p>
            <video src={URLVideoBuscarOrden} controls loop width={"100%"}>
              <source src={URLVideoBuscarOrden} type="video/mp4" />
            </video>
          </Panel>
        </Collapse>
      </Container>
      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default FAQs;

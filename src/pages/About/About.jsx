// Node.js libraries and modules
import React from "react";
import { Helmet } from "react-helmet";

// Components
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import WhatsAppButton from "../../components/WatsAppButton/WhatsAppButton";
import {
  Slider,
  SliderContainer,
  ContenedorTitle,
  Title,
} from "./Style/AboutStyleElements";
import Container from "../../components/Container/Container";
import Text from "../../components/Text/Text";
import Subtitle from "../../components/Subtitle/Subtitle";

const About = () => {
  return (
    <>
      {/* The Helmet component sets the title and meta tags for the page */}
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
      </Helmet>
      {/* The Header component contains the main navigation menu */}
      <Header />
      <SliderContainer>
        <Slider>
          <ContenedorTitle>
            <Title>SOBRE NOSOTROS</Title>
            <br />
            <Text>
              Bienvenido a nuestro equipo de desarrolladores de software
              innovadores y creativos.
            </Text>
          </ContenedorTitle>
        </Slider>
      </SliderContainer>
      <Container>
        <Text>
          En Av4cus, estamos comprometidos a impulsar la transformación digital
          de las empresas al proporcionar soluciones SaaS innovadoras y de alta
          calidad que les permitan optimizar sus procesos y mejorar sus
          resultados.Con más de 5 años de experiencia en el mercado y un enfoque
          centrado en el cliente, Av4cus se ha convertido en una opción
          confiable para las empresas que buscan mejorar su eficiencia y
          productividad.
        </Text>
      </Container>
      <Container>
        <Subtitle>NUESTRA MISIÓN</Subtitle>
        <Text>
          Es proporcionar soluciones SaaS de alta calidad que permitan a las
          empresas optimizar sus procesos y mejorar sus resultados. La empresa
          trabaja incansablemente para brindar un servicio excepcional y soporte
          técnico a sus clientes, y ayudarlos a tener éxito en su transformación
          digital.
        </Text>
      </Container>
      <Container>
        <Subtitle>NUESTRA VISIÓN</Subtitle>
        <Text>
          Es ser el proveedor lider en soluciones SaaS innovadoras que impulsen
          la transformación digital de las empresas y mejoren su eficiencia y
          productividad.
        </Text>
      </Container>
      <Container>
        <Subtitle>NUESTRA ESTRATEGIA</Subtitle>
        <Text>
          En Av4cus, nos esforzamos por ofrecer soluciones SaaS innovadoras que
          ayuden a las empresas a optimizar sus procesos y mejorar su
          productividad. Para lograr esto, seguimos una estrategia centrada en
          la investigación y el desarrollo, la expansión geográfica, el
          fortalecimiento de la marca y la colaboración con otros proveedores.
          Estas iniciativas son clave para lograr nuestra visión de ser el
          proveedor líder en soluciones SaaS innovadoras y para cumplir nuestra
          misión de proporcionar a las empresas soluciones de alta calidad que
          les permitan transformarse digitalmente y mejorar sus resultados.
        </Text>
      </Container>

      {/* This WhatsAppButton component display the WhatsApp button */}
      <WhatsAppButton />
      {/* This ScrollToTop component implement scroll up button */}
      <ScrollToTop />
      {/* This Footer component displays the webpage footer */}
      <Footer />
    </>
  );
};

export default About;

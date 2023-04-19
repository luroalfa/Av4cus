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
  ExclamationIcon,
  ImageIcon,
  ContainerCards,
  CardImage,
  CardStyle,
} from "./Style/AboutStyleElements";
import Container from "../../components/Container/Container";
import Text from "../../components/Text/Text";
import Subtitle from "../../components/Subtitle/Subtitle";

// Images
import Mision from "../../assets/images/about/icons/mision.png";
import Vision from "../../assets/images/about/icons/vision.png";
import Strategy from "../../assets/images/about/icons/estrategia.png";
import Investigation from "../../assets/images/about/investigacion.png";
import Expasion from "../../assets/images/about/expasion.jpg";
import Branding from "../../assets/images/about/branding.jpg";
import Colaboracion from "../../assets/images/about/colaboracion.jpg";
import Innovation from "../../assets/images/about/innovation.jpg";
import Compromiso from "../../assets/images/about/compromiso.jpg";
import Humildad from "../../assets/images/about/humildad.jpg";
import Servicio from "../../assets/images/about/servicio.jpg";
import { Card } from "antd";
const { Meta } = Card;

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
            <ExclamationIcon />
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
          de las empresas ofreciendo innovadores servicios de software basados
          en la nube y de alta calidad que les permitan optimizar sus procesos y
          mejorar sus resultados. Con más de 5 años de experiencia en el mercado
          y un enfoque centrado en el cliente, Av4cus se ha convertido en una
          opción confiable para las empresas que buscan mejorar su eficiencia y
          productividad.
          <br />
          Continuamente nos esforzamos por establecer relaciones sólidas y
          duraderas con nuestros clientes, y nos comprometemos a proporcionar un
          soporte y asesoramiento continuo para garantizar que nuestras
          soluciones sigan cumpliendo y superando sus expectativas. Con Av4cus
          como su socio en la transformación digital, puede estar seguro de que
          está tomando las medidas adecuadas para impulsar el éxito y el
          crecimiento de su empresa en el mundo digitalizado de hoy.
        </Text>
      </Container>
      <Container center={"center"}>
        <ImageIcon src={Mision} alt="Imagen sobre Mision" />
        <Subtitle>NUESTRA MISIÓN</Subtitle>
        <Text>
          Es proporcionar soluciones como servicios de alta calidad que permitan
          a las empresas optimizar sus procesos y mejorar sus resultados. La
          empresa trabaja incansablemente para brindar un servicio excepcional y
          soporte técnico a sus clientes, y ayudarlos a tener éxito en su
          transformación digital.
        </Text>
      </Container>
      <Container center={"center"}>
        <ImageIcon src={Vision} alt="Imagen sobre Vision" />
        <Subtitle>NUESTRA VISIÓN</Subtitle>
        <Text>
          Es ser el proveedor lider en soluciones SaaS innovadoras que impulsen
          la transformación digital de las empresas y mejoren su eficiencia y
          productividad.
        </Text>
      </Container>
      <Container center={"center"}>
        <ImageIcon src={Strategy} alt="Imagen sobre estrategia" />
        <Subtitle>NUESTRA ESTRATEGIA</Subtitle>
        <Text>
          Nos dedicamos a proporcionar servicios de software basados en la nube
          que ayuden a las empresas a optimizar sus procesos y mejorar su
          productividad. Para lograr esto, seguimos una estrategia centrada en
          la investigación y el desarrollo, la expansión geográfica, el
          fortalecimiento de la marca y la colaboración con otros proveedores.
          Estas iniciativas son clave para lograr nuestra visión de ser el
          proveedor líder en soluciones SaaS innovadoras y para cumplir nuestra
          misión de proporcionar a las empresas soluciones de alta calidad que
          les permitan transformarse digitalmente y mejorar sus resultados.
        </Text>
        <ContainerCards>
          <CardStyle
            hoverable
            cover={<CardImage alt="Investigacion" src={Investigation} />}
          >
            <Meta
              title="Investigación y desarrollo"
              description="Invertir en investigación y desarrollo para identificar y desarrollar soluciones SaaS innovadoras que resuelvan los desafíos y mejoren la eficiencia de las empresas."
            />
          </CardStyle>
          <CardStyle
            hoverable
            cover={<CardImage alt="Expasion Geografica" src={Expasion} />}
          >
            <Meta
              title="Expansión geográfica"
              description="Expandirse a nuevos mercados internacionales para aumentar la base de clientes y mejorar la presencia de la marca en el mundo."
            />
          </CardStyle>
          <CardStyle
            hoverable
            cover={
              <CardImage alt="Fortalecimiento de la marca" src={Branding} />
            }
          >
            <Meta
              title="Fortalecimiento de la marca"
              description="Nuestra marca es nuestra identidad. Queremos asegurarnos de que nuestros clientes se identifiquen con nuestros valores y que confíen en la calidad de nuestros servicios."
            />
          </CardStyle>
          <CardStyle
            hoverable
            cover={
              <CardImage
                alt="Colaboración con otros proveedores"
                src={Colaboracion}
              />
            }
          >
            <Meta
              title="Colaboración con otros proveedores"
              description="La colaboración es clave en Av4cus. Creemos que trabajar en equipo con otros proveedores nos permite innovar y encontrar soluciones más eficientes y efectivas."
            />
          </CardStyle>
        </ContainerCards>
      </Container>
      <Container center={"center"}>
        <ImageIcon src={Strategy} alt="Imagen sobre estrategia" />
        <Subtitle>VALORES</Subtitle>
        <Text>
          Nos esforzamos por ofrecer soluciones que ayuden a las empresas a
          optimizar sus procesos y mejorar su productividad. Para lograr esto,
          seguimos una estrategia centrada en la investigación y el desarrollo,
          la expansión geográfica, el fortalecimiento de la marca y la
          colaboración con otros proveedores. Estas iniciativas son clave para
          lograr nuestra visión de ser el proveedor líder en soluciones SaaS
          innovadoras y para cumplir nuestra misión de proporcionar a las
          empresas soluciones de alta calidad que les permitan transformarse
          digitalmente y mejorar sus resultados.
        </Text>
        <ContainerCards>
          <CardStyle
            hoverable
            cover={<CardImage alt="Investigacion" src={Innovation} />}
          >
            <Meta
              title="Innovación"
              description="Nos comprometemos a ofrecer soluciones de servicios de software innovadoras que ayuden a las empresas a transformarse digitalmente y mejorar su eficiencia."
            />
          </CardStyle>
          <CardStyle
            hoverable
            cover={<CardImage alt="Expasion Geografica" src={Compromiso} />}
          >
            <Meta
              title="Compromiso"
              description="Creemos en el compromiso con nuestros clientes. Nos esforzamos por comprender sus necesidades y brindar soluciones innovadoras y efectivas que les ayuden a lograr sus objetivos empresariales."
            />
          </CardStyle>
          <CardStyle
            hoverable
            cover={
              <CardImage alt="Fortalecimiento de la marca" src={Humildad} />
            }
          >
            <Meta
              title="Humildad"
              description="La humildad es uno de los valores fundamentales de Av4cus. Reconocemos que siempre hay espacio para mejorar y que debemos aprender de nuestros errorres para seguir creciendo como empresa."
            />
          </CardStyle>
          <CardStyle
            hoverable
            cover={
              <CardImage
                alt="Colaboración con otros proveedores"
                src={Servicio}
              />
            }
          >
            <Meta
              title="Excelencia al servicio"
              description="Av4cus se esfuerza por brindar un servicio excepcional y soporte técnico a sus clientes para ayudarlos a alcanzar sus objetivos y tener éxito en su transformacion digital."
            />
          </CardStyle>
        </ContainerCards>
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

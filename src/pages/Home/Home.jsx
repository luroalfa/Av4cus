import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import WhatsAppButton from "../../components/WatsAppButton/WhatsAppButton";
import Carousel from "../../components/Carousel/Carousel";
import { slidesHome } from "../../store/sliderDate";
import Container from "../../components/Container/Container";
import BussinesCard from "../../assets/images/Home/BusinessCard.png";
import {
  ImageAboutUs,
  Section1,
  Section2,
  Subtitle,
  MainTitle,
  Paragraph,
  LinkRouter,
  BgSection,
  Text,
} from "./Style/HomeStyleElements";
import { HiArrowNarrowRight } from "react-icons/hi";
import Claro from "../../assets/logos/claro.png";
import Hermatix from "../../assets/logos/hermatix_logo.svg";
import LGB from "../../assets/logos/LGB.jpg";
import Liberty from "../../assets/logos/liberty.png";
import Telyman from "../../assets/logos/telyman.png";
import CarouselImages from "../../components/CarouselImages/CarouselImages";

const slides = [Claro, Telyman, Hermatix, LGB, Liberty];

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
      <Carousel slides={slidesHome} />
      <Container>
        <Section1>
          <div>
            <MainTitle>¿Quiénes somos?</MainTitle>
            <Paragraph>
              En Av4cus estamos comprometidos en proporcionar soluciones SaaS
              innovadoras que resuelvan los desafíos empresariales. Descubre
              cómo podemos ayudarte a optimizar tus procesos y mejorar tus
              resultados. Visita nuestra página de Nosotros para obtener más
              información.
            </Paragraph>
            <div>
              <LinkRouter to={"/About"}>
                Descubre quiénes somos
                <HiArrowNarrowRight />
              </LinkRouter>
            </div>
          </div>
          <div>
            <ImageAboutUs src={BussinesCard} alt="" />
          </div>
        </Section1>
      </Container>
      <BgSection>
        <Container>
          <Section2>
            <Subtitle>
              Empresas de renombre confían en los servicios de Av4cus.
            </Subtitle>
            <Text>
              Conozca algunas de las empresas que han confiado en nosotros.
            </Text>
            <CarouselImages slides={slides} />
          </Section2>
        </Container>
      </BgSection>
      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;

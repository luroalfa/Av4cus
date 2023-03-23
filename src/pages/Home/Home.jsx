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
  Section3,
  Section4,
  BtnT,
  BtnW,
  ContainerBtns,
} from "./Style/HomeStyleElements";
import { HiArrowNarrowRight } from "react-icons/hi";
import Claro from "../../assets/logos/claro.png";
import Hermatix from "../../assets/logos/hermatix_logo.svg";
import LGB from "../../assets/logos/LGB.jpg";
import Liberty from "../../assets/logos/liberty.png";
import Telyman from "../../assets/logos/telyman.png";
import CarouselImages from "../../components/CarouselImages/CarouselImages";
import { colors } from "../../styles/theme";

const slides = [Claro, Telyman, Hermatix, LGB, Liberty];

const Home = () => {
  const UrlVdeo = "https://avacusvideofaqs.s3.amazonaws.com/videofaqs.mp4";
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
            <Paragraph align={"justify"}>
              En Av4cus estamos comprometidos en proporcionar soluciones SaaS
              innovadoras que resuelvan los desafíos empresariales. Descubre
              cómo podemos ayudarte a optimizar tus procesos y mejorar tus
              resultados. Visita nuestra página de Nosotros para obtener más
              información.
            </Paragraph>
            <br />
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

      <BgSection bgColor={colors.dark_gray}>
        <Container>
          <Section2>
            <Subtitle>
              Empresas de renombre confían en los servicios de Av4cus.
            </Subtitle>
            <Paragraph align={"center"}>
              Conozca algunas de las empresas que han confiado en nosotros.
            </Paragraph>
            <CarouselImages slides={slides} />
          </Section2>
        </Container>
      </BgSection>

      <Container>
        <Section3>
          <video src={UrlVdeo} controls loop width={"100%"}>
            <source src={UrlVdeo} type="video/mp4" />
          </video>
          <div>
            <Subtitle>¡Bienvenido al centro de ayuda de AV4CUS!</Subtitle>
            <Paragraph align={"justify"}>
              Hemos recopilado esta información a lo largo de los años para
              ayudarte a resolver cualquier duda que puedas tener. En nuestra
              sección de FAQs, encontrarás información valiosa sobre cómo
              utilizar nuestros productos y cómo sacar el máximo provecho de
              ellos. También encontrarás soluciones a problemas comunes y
              consejos útiles para aprovechar al máximo tu experiencia con
              AV4CUS.
            </Paragraph>
            <br />
            <LinkRouter to={"/FAQs"}>
              Ver las preguntas más frecuentes
              <HiArrowNarrowRight />
            </LinkRouter>
          </div>
        </Section3>
      </Container>

      <BgSection bgColor={colors.dark_blue}>
        <Container>
          <Section4>
            <Subtitle color={colors.white}>
              Únete al cambio digital con AV4CUS.
            </Subtitle>
            <ContainerBtns>
              <BtnT>HABLAR CON VENTAS</BtnT>
              <BtnW>PRUEBA GRATIS</BtnW>
            </ContainerBtns>
          </Section4>
        </Container>
      </BgSection>
      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;

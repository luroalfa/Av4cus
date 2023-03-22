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
  const UrlVdeo =
    "https://avacusvideofaqs.s3.us-east-1.amazonaws.com/V%C3%ADdeoFAQs.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDNzIpw3XLUQBqee8XU58KWb1HjmlxHnofvMypSuMgk4QIgC8IdeZpostyqnlF7MdvyQ%2FGrTAELwk5IapqaF0kWmm4q7QIImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw2MzMxMTU4NTM3OTQiDKu2XodPRVLavkALpyrBAkGQREdyp%2F6syCV9qrar04%2B26woSfp%2FAeCuKQY1p3uhHrhryCCjUYorw2%2B1b5hcyVcn0rqWy2A51miA8jCi%2BJdsOGIX6CyPUYkYyfVj7ehNEFelULpFdJc%2BmNv6i4uUCxF7TG8sZJLopY20CQwWyQDrz6EgEj6mxnVuE2hmWtoYMvQSgtqjd2sSbd7ba7AFglzDQyKnK9DVZ53VvSFhoxfA8XvP8kVBKyPy%2B8EjPBDpFT6CSVTZpX1Ye8YX4jvTe5Xd%2FHapNWaYXMj%2Fg7%2FymkycZ2XH%2B10YB3%2BiKRyGB5ZxFn2WG6o3DRmzlEam7hKNcBktXx9BA%2BtQrV%2FhuevCf2z66zLM7EihJ4raVIGOVwGwRmkl5LnFsCujzuXzYIKbnpcdbKealPbKgWF4wQQDwqkrjmX89vv%2B2u8ZOzsh9G6A5ojD3%2FOigBjqzArFCXDwbmZILHyXNnFrNooB%2FueD33AP%2BKoocP75nHpMh9%2BovccSJhLRTDt8FoejRXnGIIusW%2Fqe9IVZV76jQ2WqVBCwe5w9ziVN4j87CnB%2Flouf%2Fn09MyTr97xWvgFsfiXoLH%2FQCyhV8ofMTbhz6v9%2BL%2B16bXDagftzlpOfdchDpfBR3Y%2FpIeIQFtnS%2BpUDIJQENvZEhOKlaG2Zsnr%2BL3QM%2Fq64xmPpwjA1UbKpqvi9Pc0kMANNUJN%2Fm%2FWjKKzR8I09Zh2J2ONkgmdjdXBvv0qMFuCTtAVai6F82ee3RKIsmDdIFHv%2BSIpVlBE3%2BR%2BFUe9BAlnCFnyDK0S8aWxklbp1SRpk7NltWwCZQ1WD7b1DvPnTxfKqS38Ly4LPOA3h0La6U9QWnMOQ%2BIcNd6G6HhLwV60w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230322T023144Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZG2FFIPRGEKXN7DG%2F20230322%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7bd9effa53d6c6c9641afb160d3a77cfe52fa1ce60d32e504830b0398ee23937";
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
      <Container>
        <video src={UrlVdeo} controls autoPlay loop width={"100%"}>
          <source src={UrlVdeo} type="video/mp4" />
        </video>
      </Container>
      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;

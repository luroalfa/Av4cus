import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import WhatsAppButton from "../../components/WatsAppButton/WhatsAppButton";
import { Form, Input, Select, Button, message } from "antd"; // Importar la biblioteca antd y los componentes necesarios
import MyMap from "../../components/Map/MyMap";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import "animate.css/animate.css";
import Container from "../../components/Container/Container";
import {
  ContainerFormMap,
  SubContainerFormMap,
  SectionContact,
  ContactIconWrapper,
  ActionLink,
} from "./Style/StyleElementsContact";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import SmallText from "../../components/SmallText/SmallText";
import Subtitle from "../../components/Subtitle/Subtitle";

const { Option } = Select;
const { TextArea } = Input;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select type="number" defaultValue="506" style={{ width: 100 }}>
      <Option value="506">+506</Option>
      <Option value="504">+504</Option>
    </Select>
  </Form.Item>
);

const Contact = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    console.log("Form data:", values);

    try {
      const response = await fetch(
        "https://zkp3c88h9j.execute-api.us-east-1.amazonaws.com/dev/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        console.log(response);
        throw new Error("Error al enviar el formulario");
      }

      const data = await response.json();
      console.log("Respuesta del servidor:", data);
      form.resetFields();
      message.success("Formulario enviado exitosamente!");
    } catch (error) {
      console.error("Error:", error);
      message.error("Error al enviar el formulario");
    }
  };

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
      </Helmet>
      <Header />

      <Title>Contáctenos</Title>
      <SectionContact>
        <ActionLink href="tel:+50684959211">
          <ContactIconWrapper className="animateOnHover">
            <BsFillTelephoneFill color="white" size={50} />
            <br />
            <Text color="white">TELÉFONOS</Text>
            <SmallText color={"white"}>+(506) 8495-9211</SmallText>
          </ContactIconWrapper>
        </ActionLink>
        <ContactIconWrapper className="animateOnHover">
          <BsWhatsapp color="white" size={50} />
          <br />
          <Text color="white">WHATSAPP</Text>
          <SmallText color={"white"}>Contáctanos por WhatsApp</SmallText>
        </ContactIconWrapper>
        <ContactIconWrapper className="animateOnHover">
          <MdEmail color="white" size={50} />
          <br />
          <Text color="white">CORREO</Text>
          <SmallText color={"white"}>Av4cus@gmail.com</SmallText>
        </ContactIconWrapper>

        <ActionLink
          href="https://www.google.com/maps/place/Heredia+Province,+Heredia/@9.9983731,-84.1321913,15z/data=!3m1!4b1!4m6!3m5!1s0x8fa0faddaded66bd:0x2527e99d1a1e0bdf!8m2!3d9.9981413!4d-84.1197643!16s%2Fm%2F02rccyb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIconWrapper className="animateOnHover">
            <MdLocationOn color="white" size={50} />
            <br />
            <Text color="white">UBICACIÓN</Text>
            <SmallText color={"white"}>Oficinas Centrales Costa Rica</SmallText>
          </ContactIconWrapper>
        </ActionLink>
      </SectionContact>

      <Container>
        <Subtitle>
          ¡Estamos encantados de que hayas decidido en contactarnos!
        </Subtitle>
        <Text>
          Aquí en AV4CUS, nos enorgullecemos de ofrecer soluciones empresariales
          innovadoras y personalizadas para ayudarte a alcanzar tus objetivos.
          Nuestro equipo de expertos está ansioso por conocer tus necesidades y
          trabajar contigo para transformar tu negocio.
          <br />
          <br />
          Por favor, completa el formulario a continuación con tus detalles y
          nos pondremos en contacto contigo lo antes posible. Si prefieres
          hablar directamente con uno de nuestros representantes, no dudes en
          llamarnos o enviarnos un mensaje de WhatsApp.
          <br />
          <br />
          ¡Gracias por elegir AV4CUS y esperamos colaborar contigo!
        </Text>
      </Container>

      <ContainerFormMap>
        <SubContainerFormMap>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            style={{
              maxWidth: 600,
            }}
            form={form}
            onFinish={handleSubmit}
          >
            <Form.Item name="name" label="Nombre" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="lastname" label="Apellido">
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Correo"
              rules={[{ required: true, type: "email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Teléfono:"
              rules={[
                {
                  required: true,
                  message: "Por favor, ingrese el número de telefono!",
                },
              ]}
            >
              <Input
                type="number"
                addonBefore={prefixSelector}
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item name="subject" label="Asunto">
              <Input />
            </Form.Item>
            <Form.Item
              name="content"
              label="Comentario"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 10 }}>
              <Button htmlType="submit">Enviar</Button>
            </Form.Item>
          </Form>
        </SubContainerFormMap>
        <SubContainerFormMap>
          <MyMap />
        </SubContainerFormMap>
      </ContainerFormMap>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Contact;

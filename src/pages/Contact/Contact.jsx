import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import WhatsAppButton from "../../components/WatsAppButton/WhatsAppButton";
import { Form, Input, Select, Button, message } from "antd"; // Importar la biblioteca antd y los componentes necesarios
import MyMap from "../../components/Map/MyMap";

import { ContainerFormMap, ContainerFM } from "./Style/StyleElementsContact";
import Title from "../../components/Title/Title";
import Container from "../../components/Container/Container";

const { Option } = Select;
const { TextArea } = Input;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 100 }}>
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
      <Container>
        <Title>Contáctanos</Title>
        <ContainerFormMap>
          <ContainerFM>
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
              <Form.Item name="name" label="Nombre">
                <Input />
              </Form.Item>
              <Form.Item name="lastname" label="Apellido">
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="Correo"
                rules={[{ type: "email" }]}
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
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item name="subject" label="Asunto">
                <Input />
              </Form.Item>
              <Form.Item name="content" label="Comentario">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 4, span: 10 }}>
                <Button htmlType="submit">Enviar</Button>
              </Form.Item>
            </Form>
          </ContainerFM>
          <ContainerFM>
            <MyMap />
          </ContainerFM>
        </ContainerFormMap>
      </Container>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Contact;

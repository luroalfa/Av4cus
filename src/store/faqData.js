const URLVideoBuscarOrden =
  "https://avacusvideofaqs.s3.amazonaws.com/buscarorden.mp4";
const URLVideoEditarOrden =
  "https://avacusvideofaqs.s3.amazonaws.com/editarOrden.mp4";

const faqData = [
    {
      id: 1,
      question: "¿Qué es Synapse?",
      answer: "Synapse es un software como servicio para la gestión administrativa y automatización de procesos sincronizados en la nube, que permite la generación de reportes con dicha información.",
      video: null,
    },
    {
      id: 2,
      question: "¿Cómo puedo adquirir los servicios de Synapse?",
      answer: "El Cliente puede adquirir los servicios de Synapse de Av4cus mediante una suscripción mensual que se basa en el número de usuarios administrativos y técnicos activos, con un precio de $5 USD por usuario.",
      video: null,
    },
    {
      id: 3,
      question: "¿Qué sucede si no cancelo la mensualidad correspondiente a tiempo?",
      answer: "Si el Cliente no cancela la mensualidad correspondiente dentro de los primeros quince días hábiles del siguiente mes, a partir del día 16 se incluirá un cobro moratorio de UNO POR CIENTO (1%) diario, que se calculará sobre el principal vencido y no pagado. La mora operará bajo el concepto de incumplimiento en el pago del principal, sin necesidad de protesta, requerimiento o intimación.",
      video: null,
    },
    {
      id: 4,
      question: "¿Como se puede buscar una orden?",
      answer: "Para facilitar el proceso de buscar una orden de pedido, hemos creado un video tutorial que muestra paso a paso cómo realizarlo. Al seguir las instrucciones del video, podrás buscar tu orden de manera rápida y sencilla. Además, el video te ayudará a visualizar mejor el proceso y responder a posibles dudas ¡No dudes en revisarlo para obtener más detalles!",
      video: URLVideoBuscarOrden,
    },
    {
      id: 5,
      question: "¿Como se puede editar una orden?",
      answer: "Para facilitar el proceso de editar una orden de pedido, hemos creado un video tutorial que muestra paso a paso cómo realizarlo. Al seguir las instrucciones del video, podrás editar tu orden de manera rápida y sencilla. Además, el video te ayudará a visualizar mejor el proceso y responder a posibles dudas ¡No dudes en revisarlo para obtener más detalles!",
      video: URLVideoEditarOrden,
    },
  ]; 
  

export default faqData;

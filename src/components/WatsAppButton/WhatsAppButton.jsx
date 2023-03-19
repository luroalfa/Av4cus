import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WhatsappButton } from "./Style/WatsAppButtonStyleElements";

const WhatsAppButton = () => {
  return (
    <WhatsappButton
      href="https://api.whatsapp.com/send?phone=+50684959211"
      target="_blank"
    >
      <FaWhatsapp />
    </WhatsappButton>
  );
};

export default WhatsAppButton;

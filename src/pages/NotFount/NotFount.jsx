import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import { Video } from "./Style/StyleElmentsNotFound";

const NotFount = () => {
  const UrlVdeo = "https://avacusvideofaqs.s3.amazonaws.com/notfound.mp4";
  return (
    <>
      <Helmet>
        <title>AV4CUS-Not Fount</title>
      </Helmet>
      <Header />
      <Video src={UrlVdeo} autoPlay width={"100%"}>
        <source src={UrlVdeo} type="video/mp4" />
      </Video>
    </>
  );
};

export default NotFount;

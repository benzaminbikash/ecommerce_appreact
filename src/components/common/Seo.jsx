import React from "react";
import { Helmet } from "react-helmet";
import { removeTag } from "./constant";

function Seo({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={removeTag(description)} />

      <meta
        property="og:type"
        content={"ecommerce website revotek/revolution technology"}
      />
      <meta property="og:title" content={title} />
    </Helmet>
  );
}

export default Seo;

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { removeTag } from "./constant";

function Seo({ title, description }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={removeTag(description)} />

        <meta
          property="og:type"
          content={"ecommerce website revotek/revolution technology"}
        />
        <meta property="og:title" content={title} />
      </Helmet>
    </HelmetProvider>
  );
}

export default Seo;

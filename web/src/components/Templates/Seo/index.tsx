import React from 'react';
import Head from 'next/head';
import { AppConfig } from '@/config';
interface Metatags {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  tags?: string;
}

const Metatags: React.FC<Metatags> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title ? `${AppConfig.title} | ${props.title} ` : AppConfig.title}</title>
        <meta name="description" content={props.description ? props.description : AppConfig.description} />
        <link rel="canonical" href={props.url ? props.url : AppConfig.uri} />
        <meta httpEquiv="content-language" content="pt-BR" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt-BR" />
        <meta property="og:title" content={props.title ? props.title : AppConfig.title} />
        <meta property="og:url" content={props.url ? props.url : ''} />
        <meta property="og:description" content={props.description ? props.description : AppConfig.title} />
        <meta property="og:url" content={props.url ? props.url : AppConfig.title} />
        <meta property="og:site_name" content={props.title ? props.title : AppConfig.title} />
        <meta property="fb:app_id" content="aap_id" />
        <meta name="keywords" content={`${props.tags && `${props.tags}, `} ${AppConfig.title}, AFD, Linguagens Formais`} />
        <meta name="author" content={AppConfig.title} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={props.url ? props.url : AppConfig.uri} />
        <meta name="twitter:title" content={props.title ? props.title : AppConfig.title} />
        <meta name="twitter:description" content={props.description ? props.description : AppConfig.description} />
        <meta name="twitter:creator" content={AppConfig.title} />

        <meta name="robots" content="follows" />
        <meta name="pinterest-rich-pin" content="false" />
        <meta name="copyright" content={`© ${new Date().getFullYear()} ${AppConfig.title}`} />
      </Head>
    </>
  );
};

export default Metatags;

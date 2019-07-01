import Head from 'next/head';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import normalize from 'emotion-normalize';

import theme from './theme.js';
import defaultImage from '../../static/logo.jpg';

const defaultCanonical = 'https://patrickcason.com';
const defaultName = 'Patrick Cason';
const defaultDescription =
  "I'm a software engineer and UI designer - interested in online privacy, open-source software, and ethical programming.";

export default ({
  title,
  canonical = defaultCanonical,
  name = defaultName,
  description = defaultDescription,
  image = defaultImage,
  noRobots,
  children
}) => {
  title = title ? `${name} | ${title}` : name;

  return (
    <React.Fragment>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={name} />
        <meta property="og:description" content={description} />

        {noRobots && <meta name="robot" content="noindex, nofollow" />}

        <link rel="canonical" href={canonical} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#323232" />
        <meta name="theme-color" content="#323232" />

        <title>{title}</title>
      </Head>
      <Global
        styles={{
          normalize,
          body: { background: theme.colors.white, color: theme.colors.black }
        }}
      />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </React.Fragment>
  );
};

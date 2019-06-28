import Head from 'next/head';

import defaultImage from '../../static/patrick.jpg';

const defaultCanonical = 'https://patrickcason.com';
const defaultName = 'Patrick Cason';
const defaultDescription =
  'Full-stack developer & UI designer - interested in Internet privacy, open-source software, and ethical software development.';

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
      {children}
    </React.Fragment>
  );
};

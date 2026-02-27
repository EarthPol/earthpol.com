import React from 'react';
import Head from '@docusaurus/Head';
import {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';

export default function NotFoundPage() {
  const title = translate({
    id: 'theme.NotFound.title',
    message: 'Page Not Found',
  });
  const description =
    'The requested EarthPol page could not be found. Browse the homepage, docs, or blog to continue.';

  return (
    <>
      <PageMetadata title={title} description={description} />
      <Head>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <Layout>
        <NotFoundContent />
      </Layout>
    </>
  );
}

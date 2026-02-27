import React from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import Heading from '@theme/Heading';

function BlogListPageMetadata(props) {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink, page, totalPages} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const baseTitle = isBlogOnlyMode ? siteTitle : blogTitle;
  const title = page > 1 ? `${baseTitle} | Page ${page}` : baseTitle;
  const description =
    page > 1
      ? `${blogDescription} Page ${page} of ${totalPages}.`
      : blogDescription;

  return (
    <>
      <PageMetadata title={title} description={description} />
      {page > 1 && (
        <Head>
          <meta name="robots" content="noindex,follow" />
        </Head>
      )}
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props) {
  const {metadata, items, sidebar} = props;
  const {blogTitle, page} = metadata;
  const heading = page > 1 ? `${blogTitle} - Page ${page}` : blogTitle;

  return (
    <BlogLayout sidebar={sidebar}>
      <header className="margin-bottom--lg">
        <Heading as="h1">{heading}</Heading>
      </header>
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}

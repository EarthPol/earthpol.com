import React from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  useBlogAuthorPageTitle,
  BlogAuthorsListViewAllLabel,
  BlogAuthorNoPostsLabel,
} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import {useBlogMetadata} from '@docusaurus/plugin-content-blog/client';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import Author from '@theme/Blog/Components/Author';

function Metadata({author, listMetadata}) {
  const title = useBlogAuthorPageTitle(author);
  const {page, totalPages} = listMetadata;
  const descriptionBase =
    author.description ||
    `Posts from ${author.name} on the EarthPol blog.`;
  const description =
    page > 1 ? `${descriptionBase} Page ${page} of ${totalPages}.` : descriptionBase;

  return (
    <>
      <PageMetadata title={title} description={description} />
      {page > 1 && (
        <Head>
          <meta name="robots" content="noindex,follow" />
        </Head>
      )}
      <SearchMetadata tag="blog_authors_posts" />
    </>
  );
}

function ViewAllAuthorsLink() {
  const {authorsListPath} = useBlogMetadata();
  return (
    <Link href={authorsListPath}>
      <BlogAuthorsListViewAllLabel />
    </Link>
  );
}

function Content({author, items, sidebar, listMetadata}) {
  return (
    <BlogLayout sidebar={sidebar}>
      <header className="margin-bottom--xl">
        <Author as="h1" author={author} />
        {author.description && <p>{author.description}</p>}
        <ViewAllAuthorsLink />
      </header>
      {items.length === 0 ? (
        <p>
          <BlogAuthorNoPostsLabel />
        </p>
      ) : (
        <>
          <hr />
          <BlogPostItems items={items} />
          <BlogListPaginator metadata={listMetadata} />
        </>
      )}
    </BlogLayout>
  );
}

export default function BlogAuthorsPostsPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogAuthorsPostsPage,
      )}>
      <Metadata {...props} />
      <Content {...props} />
    </HtmlClassNameProvider>
  );
}

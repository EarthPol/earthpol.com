function createConfigSnippet({ trackingID, anonymizeIP }) {
  return `window.gtag('config', '${trackingID}', { ${anonymizeIP ? "'anonymize_ip': true" : ''} });`;
}

function createConfigSnippets({ trackingID, anonymizeIP }) {
  return trackingID
    .map((id) => createConfigSnippet({ trackingID: id, anonymizeIP }))
    .join('\n');
}

module.exports = function safeGtagPlugin(context, options) {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  const trackingID = Array.isArray(options.trackingID)
    ? options.trackingID
    : [options.trackingID];
  const firstTrackingId = trackingID[0];

  return {
    name: 'safe-gtag',
    getClientModules() {
      return ['./client'];
    },
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://www.google-analytics.com',
            },
          },
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://www.googletagmanager.com',
            },
          },
          {
            tagName: 'script',
            attributes: {
              async: true,
              src: `https://www.googletagmanager.com/gtag/js?id=${firstTrackingId}`,
            },
          },
          {
            tagName: 'script',
            innerHTML: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function(){window.dataLayer.push(arguments);}
              window.gtag('js', new Date());
              ${createConfigSnippets({ trackingID, anonymizeIP: options.anonymizeIP })};
            `,
          },
        ],
      };
    },
  };
};

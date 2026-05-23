function safeGtag(...args) {
  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag === 'function') {
    window.gtag(...args);
    return;
  }

  window.dataLayer.push(args);
}

const clientModule = {
  onRouteDidUpdate({ location, previousLocation }) {
    if (
      previousLocation &&
      (location.pathname !== previousLocation.pathname ||
        location.search !== previousLocation.search ||
        location.hash !== previousLocation.hash)
    ) {
      setTimeout(() => {
        safeGtag('set', 'page_path', location.pathname + location.search + location.hash);
        safeGtag('event', 'page_view');
      });
    }
  },
};

export default clientModule;

if (typeof browser === 'undefined') browser = chrome
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);
    url.href = url.href + "?single_comment=1";
    return { redirectUrl: url.toString() }
  },
  {
    urls: [
        "*://github.com/*/pull/*/review_comment/create",
    ]
  },
  ['blocking']
)

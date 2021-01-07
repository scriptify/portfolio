export const GA_TRACKING_ID = "G-ECK2KQLGCF";

const fnQueue: any[] = [];

function getGtag() {
  function addToToQueue(...args: any[]) {
    fnQueue.push(args);
  }

  const gtag =
    typeof window === "undefined" || !(window as any).gtag
      ? addToToQueue
      : (window as any).gtag;

  return gtag;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  getGtag()("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: string | number;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const analyticsEvent = ({ action, category, label, value }: GAEvent) => {
  getGtag()("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

const CONSENT_STORAGE_KEY = "cookie-consent";

export function giveConsent() {
  localStorage.setItem(CONSENT_STORAGE_KEY, Date.now().toString());

  // Load GA and execute all items from queue
  const scriptElem = document.createElement("script");
  scriptElem.addEventListener("load", () => {
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    function gtag(...a: any[]) {
      w.dataLayer.push(arguments);
    }

    w.gtag = gtag;

    gtag("js", new Date());

    gtag("config", "G-ECK2KQLGCF");

    fnQueue.forEach((args) => {
      gtag(...args);
    });
  });
  scriptElem.src = "https://www.googletagmanager.com/gtag/js?id=G-ECK2KQLGCF";

  document.body.insertAdjacentElement("beforeend", scriptElem);
}

export function wasConsentGiven() {
  if (typeof window === "undefined" || !window.localStorage) return false;
  const data = localStorage.getItem(CONSENT_STORAGE_KEY);
  return !!data;
}

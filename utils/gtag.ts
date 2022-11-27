export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Adding gtag property to global window object
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    gtag?: any;
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value: number;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action, category, label, value,
}: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};

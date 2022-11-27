import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../utils/gtag';

import Header from './Header';
import Footer from './Footer';

export default function Layout(props: any) {
  const { children } = props;
  const [bodyClass, setBodyClass] = useState('preload');
  const router = useRouter();

  // Removing preload class from body so that transitions are not
  // visible on load.
  useEffect(() => {
    window.addEventListener('load', () => setBodyClass(''));
  }, []);

  // Updating Google Anayltics on route change
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={bodyClass}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

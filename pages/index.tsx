import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HomeStyles from '../styles/Home.module.scss';
import HomeBlock from '../components/HomeBlock';
import BlueButton from '../components/BlueBtns';
import Contact from '../components/Contact';
import PhoneMockup from '../components/mockups/PhoneMockup';
import TabMockup from '../components/mockups/TabMockup';
import LaptopMockup from '../components/mockups/LaptopMockup';

export default function Home() {
  const [customTaglineStyles, setCustomTaglineStyles] = useState({});
  const [customTaglineStyles2, setCustomTaglineStyles2] = useState({});

  useEffect(() => {
    function tagLoad() {
      const { scrollY } = window;
      const translateLength = (scrollY - 475) / 7;
      setCustomTaglineStyles({
        transform: `translate(${translateLength}%)`,
      });
      setCustomTaglineStyles2({
        transform: `translate(${-translateLength}%)`,
      });
    }
    window.addEventListener('scroll', tagLoad);
  }, []);

  return (
    <div className={HomeStyles.home}>
      <Head>
        <title>GreyDot Solutions</title>
      </Head>
      <div className={HomeStyles.hero}>
        <img
          src="/images/grey-logo.png"
          alt="GreyDot Solutions Logo"
          loading="lazy"
        />
        <p>
          Every new idea seems crazy at first, just make it look great. We excel
          at making crazy things look beautiful!
        </p>
      </div>
      <div className={HomeStyles.taglines}>
        <p id="tag-left" style={customTaglineStyles}>
          We make good stuff, quickly.
        </p>
        <p
          id="tag-right"
          style={customTaglineStyles2}
          className={HomeStyles['border-text']}
        >
          We make good stuff, quickly.
        </p>
      </div>
      <div className={HomeStyles['home-blocks']}>
        <HomeBlock
          heading="Develop."
          list={['Websites.', 'Apps.', 'Softwares.']}
        />
        <HomeBlock
          heading="Design."
          list={['Brand Identity.', 'Graphics.', 'Advertisements.']}
        />
        <HomeBlock
          heading="Sell."
          list={['Campaigns.', 'Lead Generation.', 'Force Outsourcing.']}
        />
      </div>
      <div className={HomeStyles.mockups}>
        <div className={HomeStyles.mockup}>
          <div className={HomeStyles['m-ipad']}>
            <TabMockup clientName="zariyaaa" />
          </div>
          <div className={HomeStyles['m-phone']}>
            <PhoneMockup clientName="edudictive" />
          </div>
          <div className={HomeStyles['m-laptop']}>
            <LaptopMockup clientName="hoohoop" loading="lazy" />
          </div>
        </div>
      </div>
      <div className={HomeStyles.clients}>
        <h1>Clients</h1>
        <div className={HomeStyles['client-logo']}>
          <ul>
            <li className={HomeStyles.vertical}>
              <Link href="https://zariyaaa.com/">
                <a
                  href="https://zariyaaa.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/Zariyaaa logo.png"
                    alt="Zariyaaa Logo"
                    loading="lazy"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://edudictive.in/">
                <a
                  href="https://edudictive.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/Edudictive Logo.svg"
                    alt="Edudictive Logo"
                    loading="lazy"
                  />
                </a>
              </Link>
            </li>
            <li className={HomeStyles.vertical}>
              <Link href="https://hoohoop.co.nz/">
                <a
                  href="https://hoohoop.co.nz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/hoohoop logo.png"
                    alt="Hoohoop Logo"
                    loading="lazy"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.souvlakiking.nz/">
                <a
                  href="https://www.souvlakiking.nz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/souvlaki king logo.svg"
                    alt="Souvlaki King Logo"
                  />
                </a>
              </Link>
            </li>
            <li className={HomeStyles.vertical}>
              <Link href="https://rubistosdesigns.com/">
                <a
                  href="https://rubistosdesigns.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/rubistos-logo.png"
                    alt="Rubistos Logo"
                    loading="lazy"
                  />
                </a>
              </Link>
            </li>
            <li className={HomeStyles.vertical}>
              <Link href="https://narvadadiagnostics.com/">
                <a
                  href="https://narvadadiagnostics.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/narvada centre logo.png"
                    alt="Narvada Logo"
                    loading="lazy"
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={HomeStyles.support}>
        <h1>Start-up Support</h1>
        <div className={HomeStyles['support-info']}>
          <div className={HomeStyles['support-details']}>
            <p>
              We believe in promoting the pursuit of entrepreneurship. Our
              startup support program is designed to help budding student-run
              startups gain a digital presence, grow, and find the right
              investor.
            </p>
            <BlueButton id="blue-border">
              {/* <Link href="/images/grey-logo-small.png" download="Brochure">
                Download Brochure
              </Link> */}
              <Link href="/contact">Contact Us</Link>
            </BlueButton>
          </div>
          <div className={HomeStyles['support-illus']}>
            <img src="/images/data-img.png" alt="GreyDot Data" loading="lazy" />
            <p>Making things easy</p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

import Head from 'next/head';
import { useEffect, useState } from 'react';
import ClientStyles from '../../styles/Clients.module.scss';
import LaptopMockup from '../../components/mockups/LaptopMockup';
import Newsletter from '../../components/Newsletter';

export default function Clients() {
  const clients = [
    [1, 'Edudictive', 'Ed-Tech Platform', 'edudictive'],
    [2, 'Hoohoop', 'Vehicle Listing Platform', 'hoohoop'],
    [3, 'Zariyaaa', 'Mental Health Clinic', 'zariyaaa'],
    [
      4,
      'Narvada Diagnostics',
      'X-ray and Pathology Center',
      'narvada-diagnostics',
    ],
    [5, 'Souvlaki King', 'Food Delivery Restaurant', 'souvlaki-king'],
    [6, 'Rubistos Designs', 'Fashion E-Commerce', 'rubistos'],
  ];

  const [clientName, setClientName] = useState('edudictive');

  useEffect(() => {
    function showClient(event: any) {
      setClientName(event.target.getAttribute('data-client'));
    }

    const accordionHead = document.querySelectorAll('.accordion-heading');
    const accordionMenu = document.querySelectorAll('.acc-menu');
    const accordionDropdown = document.querySelectorAll('.acc-drop');

    function showAccordion(i: number) {
      if (accordionMenu[i].getAttribute('data-show') === 'false') {
        accordionMenu[i].setAttribute('data-show', 'true');
        accordionDropdown[i].setAttribute('data-show', 'true');
      } else {
        accordionMenu[i].setAttribute('data-show', 'false');
        accordionDropdown[i].setAttribute('data-show', 'false');
      }
      for (let j = 0; j < accordionHead.length; j += 1) {
        if (j !== i) {
          accordionMenu[j].setAttribute('data-show', 'false');
          accordionDropdown[j].setAttribute('data-show', 'false');
        }
      }
    }

    function handleResize() {
      if (window.innerWidth <= 1200) {
        document.querySelectorAll('.client-heading').forEach((clientHead) => {
          clientHead.removeEventListener('click', showClient);
        });
        for (let i = 0; i < accordionHead.length; i += 1) {
          accordionHead[i].addEventListener('click', () => {
            showAccordion(i);
          });
        }
      } else {
        for (let i = 0; i < accordionHead.length; i += 1) {
          accordionHead[i].removeEventListener('click', () => {
            showAccordion(i);
          });
        }
        document.querySelectorAll('.client-heading').forEach((clientHead) => {
          clientHead.addEventListener('click', showClient);
        });
      }
    }

    // window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  return (
    <div id={ClientStyles['clients-page']}>
      <Head>
        <title>Clients | GreyDot</title>
      </Head>
      <div className={ClientStyles['client-panel']}>
        <h1>Clients</h1>
        <div className={ClientStyles['client-flex']}>
          <div className={ClientStyles['client-heads']}>
            {clients.map((client: string[]) => (
              <div key={client[0]} className={ClientStyles.accordion}>
                <div
                  className={`${ClientStyles['accordion-head']} accordion-heading`}
                  data-show="false"
                >
                  <div
                    className={`${ClientStyles['client-head']} client-heading`}
                    data-client={client[3]}
                  >
                    <h2 data-client={client[3]}>{client[1]}</h2>
                    <p data-client={client[3]}>{client[2]}</p>
                  </div>
                  <img
                    src="/images/chevron-down.svg"
                    className={`${ClientStyles['accordion-dropdown']} acc-drop`}
                    data-show="false"
                    alt="Down arrow"
                  />
                </div>
                <div
                  className={`${ClientStyles['accordion-menu']} acc-menu`}
                  data-show="false"
                >
                  <div>
                    <div className={ClientStyles['client-display']}>
                      <LaptopMockup clientName={client[3]} loading="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={ClientStyles['client-display']}>
            <LaptopMockup clientName={clientName} loading="" />
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

import { useState } from 'react';
import Link from 'next/link';
import RunnerStyles from '../styles/Runners.module.scss';

const Header = () => {
  const [hamMenuClass, setHamMenuClass] = useState(
    `${RunnerStyles['ham-menu']}`,
  );
  const [contactStyle, setContactStyle] = useState({});

  function openHamMenu() {
    setHamMenuClass(hamMenuClass.concat(` ${RunnerStyles['toggle-menu']}`));
    setContactStyle({ transform: 'translate(0, -100%)' });
  }

  function closeHamMenu() {
    setHamMenuClass(`${RunnerStyles['ham-menu']}`);
    setContactStyle({});
  }

  const Heads = [
    [1, 'Home', '/'],
    [2, 'Services', '/services'],
    [3, 'Clients', '/clients'],
  ];

  return (
    <header className={RunnerStyles.head}>
      <div className={RunnerStyles['sub-menu']}>
        <div
          onClick={openHamMenu}
          aria-hidden="true"
          className={RunnerStyles.hamburger}
        >
          <div className={RunnerStyles.bar1} />
          <div className={RunnerStyles.bar2} />
          <div className={RunnerStyles.bar3} />
        </div>
        <div className={RunnerStyles['head-logo-mob']}>
          <Link href="/">
            <img
              src="/images/grey-logo-mobile.png"
              alt="GreyDot Solutions Logo"
              loading="lazy"
            />
          </Link>
        </div>
        <div className={RunnerStyles['head-logo']}>
          <Link href="/">
            <img
              src="/images/grey-logo2.png"
              alt="GreyDot Solutions Logo"
              loading="lazy"
            />
          </Link>
        </div>
        <nav className={RunnerStyles['head-nav']}>
          <ul id={RunnerStyles['head-links']}>
            {Heads.map((head: string[]) => (
              <li key={head[0]}>
                <Link href={head[2]}>{head[1]}</Link>
              </li>
            ))}
          </ul>
          <ul style={contactStyle} className={RunnerStyles['head-contact']}>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={hamMenuClass}>
        <div className={RunnerStyles['ham-heads-section']}>
          <div className={RunnerStyles['ham-heads']}>
            <ul>
              {Heads.map((head: string[]) => (
                <li key={head[0]} aria-hidden="true" onClick={closeHamMenu}>
                  <Link href={head[2]}>{head[1]}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={closeHamMenu}
            aria-hidden="true"
            className={RunnerStyles['ham-exit']}
          >
            <div className={RunnerStyles.bar1} />
            <div className={RunnerStyles.bar2} />
            <div className={RunnerStyles.bar3} />
          </div>
        </div>
        <div
          onClick={closeHamMenu}
          aria-hidden="true"
          className={RunnerStyles['ham-menu-vacant']}
        />
      </div>
    </header>
  );
};

export default Header;

/* eslint-disable */
import Link from 'next/link';
import RunnerStyles from '../styles/Runners.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={RunnerStyles['foot']}>
      <img
        src="/images/grey-logo.png"
        alt="GreyDot Solutions Logo"
        loading="lazy"
      />
      <div className={RunnerStyles['foot-flex']}>
        <p>&copy; {currentYear} by Greydot Solutions</p>
        <p id={RunnerStyles['foot-contact']}>
          <Link href="mailto: contact@greydotsolutions.com">
            contact@greydotsolutions.com
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

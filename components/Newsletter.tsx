import Link from 'next/link';
import NLStyles from '../styles/Newsletter.module.scss';
import BlueButton from './BlueBtns';

export default function Newsletter() {
  return (
    <div className={NLStyles.newsletter}>
      <h2>Interested? Send us a mail!</h2>
      <p>
        An idea is just an idea unless you make something of it. Lets get on a
        call or a coffee, and discuss it through.
      </p>
      <BlueButton>
        <Link href="/contact">Contact Us</Link>
      </BlueButton>
    </div>
  );
}

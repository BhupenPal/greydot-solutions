import Head from 'next/head';
import Contact from '../../components/Contact';
import ContactStyles from '../../styles/Contact.module.scss';

export default function ContactUs() {
  return (
    <div id={ContactStyles['contact-page']}>
      <Head>
        <title>Contact Us | GreyDot</title>
      </Head>
      <Contact />
    </div>
  );
}

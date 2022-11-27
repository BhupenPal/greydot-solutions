import Head from 'next/head';
import { useEffect, useState } from 'react';
import ContactStyles from '../styles/Contact.module.scss';
import BlueButton from './BlueBtns';

export default function Contact() {
  const [btnState, setBtnState] = useState(false);
  const [compValue, setValue] = useState('');

  useEffect(() => {
    const nameField = document.querySelector('#name');
    const compName = document.querySelector('#company-name');

    nameField.addEventListener('paste', (e) => e.preventDefault());
    nameField.addEventListener('copy', (e) => e.preventDefault());
    nameField.addEventListener('cut', (e) => e.preventDefault());

    compName.addEventListener('input', () => {
      if (compValue !== '') setBtnState(true);
      setBtnState(true);
    });
  }, []);

  return (
    <div id="contact-us" className={ContactStyles['contact-us']}>
      <Head>
        <link
          rel="stylesheet"
          href="https://s.pageclip.co/v1/pageclip.css"
          media="screen"
        />
      </Head>
      <div className={ContactStyles['contact-flex']}>
        <form
          action="https://send.pageclip.co/WTqxZGaLmXNXioVV1hpdNWE5wa16UwAw/contact-us"
          className="pageclip-form"
          method="POST"
        >
          <label htmlFor="name">
            <p>Your name</p>
            <input type="text" id="name" name="name" required />
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input type="email" id="email" name="email" required />
          </label>
          <input
            className={ContactStyles['comp-name']}
            type="text"
            name="company-name"
            id="company-name"
            onChange={(e) => setValue(e.target.value)}
            value={compValue}
          />
          <label htmlFor="phone-number">
            <p>Phone number</p>
            <input
              type="number"
              id="phone-number"
              name="phoneNumber"
              required
            />
          </label>
          <label htmlFor="comments">
            <p>So, what&apos;s up?</p>
            <textarea id="comments" name="comments" required />
          </label>
          <div className={ContactStyles['form-btns']}>
            <BlueButton formClass="pageclip-form__submit" disability={btnState}>
              <span>Send</span>
            </BlueButton>
          </div>
        </form>
        <div className={ContactStyles['contact-info']}>
          <h2>Let&apos;s work together</h2>
          <p>
            From understanding your requirements to designing and developing it.
            We keep it simple.
          </p>
        </div>
      </div>
    </div>
  );
}

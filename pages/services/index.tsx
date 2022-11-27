import Head from 'next/head';
import ServicesStyles from '../../styles/Services.module.scss';
import ServicesBlock from '../../components/ServicesBlock';
import Newsletter from '../../components/Newsletter';

export default function ServicesPage() {
  const serviceBlocks = [
    [
      1,
      'Design.',
      'Great designs are those which bring in sales. Beauty without functionality is like driving a sports car without the engine. We build functional and scalable brand designs.',
      [
        ['/images/Design/5.png', ''],
        ['/images/Design/6.png', ''],
        ['/images/Design/7.png', ''],
        ['/images/Design/8.png', ''],
      ],
    ],
    [
      2,
      'Develop.',
      'At GreyDot, we build beautiful and fast websites and apps to ensure your business has the right tools to scale itself and become a brand. Websites should look good from the inside and the out.',
      [
        ['/images/Develop/2.png', ''],
        ['/images/Develop/3.png', ''],
        ['/images/Develop/4.png', 'filter-white'],
      ],
    ],
    [
      3,
      'Sell.',
      'Customer behaviour is one of the most dynamic, yet constant aspect in today’s market. We help you in understanding the needs of your customers, and also, provide you with new ones. From running campaigns to generating leads, we take care of things, and people.',
      [
        ['/images/Sell/9.png', ''],
        ['/images/Sell/10.png', ''],
        ['/images/Sell/11.png', ''],
        ['/images/Sell/12.png', ''],
      ],
    ],
  ];

  return (
    <div className={ServicesStyles.services}>
      <Head>
        <title>Services | GreyDot</title>
      </Head>
      <div className={ServicesStyles['services-info']}>
        <h1>Services</h1>
        {serviceBlocks.map((block: string[]) => (
          <ServicesBlock
            key={block[0]}
            heading={block[1]}
            para={block[2]}
            imgArray={block[3]}
          />
        ))}
      </div>
      <Newsletter />
    </div>
  );
}

import ServicesStyles from '../styles/Services.module.scss';

const ServicesBlock = (props: any) => {
  const { heading, para, imgArray } = props;

  return (
    <div className={ServicesStyles['services-block']}>
      <h2>{heading}</h2>
      <p>{para}</p>
      <div className={ServicesStyles['block-imgs']}>
        {imgArray.map((img: Array<string>) => (
          <img
            key={img[0]}
            className={`${ServicesStyles[`${img[1]}`]}`}
            src={img[0]}
            alt="Services GreyDot"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesBlock;

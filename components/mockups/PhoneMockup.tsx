import MockupStyles from '../../styles/Mockups.module.scss';

const PhoneMockup = (props: any) => {
  const { clientName } = props;
  return (
    <div className={MockupStyles['device-iphone-x']}>
      <div className={MockupStyles['device-frame']}>
        <img
          className={MockupStyles['device-content']}
          src={`/images/${clientName}-mobile.png`}
          alt={clientName}
          loading="lazy"
        />
      </div>
      <div className={MockupStyles['device-stripe']} />
      <div className={MockupStyles['device-header']} />
      <div className={MockupStyles['device-sensors']} />
      <div className={MockupStyles['device-btns']} />
      <div className={MockupStyles['device-power']} />
      <div className={MockupStyles['device-home']} />
    </div>
  );
};

export default PhoneMockup;

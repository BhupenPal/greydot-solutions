import MockupStyles from '../../styles/Mockups.module.scss';

export default function TabMockup(props: any) {
  const { clientName } = props;

  return (
    <div
      className={`${MockupStyles['device-ipad-pro']} ${MockupStyles['device-gold']}`}
    >
      <div className={MockupStyles['device-frame']}>
        <img
          className={MockupStyles['device-content']}
          src={`/images/${clientName}-tablet.png`}
          alt={clientName}
          loading="lazy"
        />
      </div>
      <div className={MockupStyles['device-stripe']} />
      <div className={MockupStyles['device-header']} />
      <div className={MockupStyles['device-sensors']} />
      <div className={MockupStyles['device-btns']} />
      <div className={MockupStyles['device-power']} />
    </div>
  );
}

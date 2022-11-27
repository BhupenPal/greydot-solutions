import MockupStyles from '../../styles/Mockups.module.scss';

export default function LaptopMockup(props: any) {
  const { clientName, loading } = props;

  return (
    <div
      className={`${MockupStyles['device-macbook']} ${MockupStyles['device-spacegray']}`}
    >
      <div className={MockupStyles['device-frame']}>
        <img
          className={MockupStyles['device-content']}
          src={`/images/${clientName}-desktop.png`}
          alt={clientName}
          loading={loading}
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

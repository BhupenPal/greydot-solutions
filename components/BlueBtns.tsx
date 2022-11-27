import BtnStyles from '../styles/BlueBtn.module.scss';

export default function BlueButton(props: any) {
  const {
    id, children, formClass, disability,
  } = props;

  return (
    <button
      id={`${BtnStyles[`${id}`]}`}
      type="submit"
      className={`${BtnStyles['blue-btn']} ${formClass}`}
      disabled={disability}
    >
      {children}
    </button>
  );
}
